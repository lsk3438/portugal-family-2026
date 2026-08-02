/* ============================================================================
   BUILD — produit la version « fichier unique » du site
   ----------------------------------------------------------------------------
   Le site servi par GitHub Pages, c'est index.html tel quel : il charge les
   feuilles de style de assets/css/ et les modules ES de assets/js/. Rien à
   compiler pour le mettre en ligne.

   Ce script sert à autre chose : fabriquer public/index.html, une copie du
   site où tout — CSS, JavaScript, données — est replié dans un seul fichier.
   C'est cette version-là qu'on peut envoyer par message et ouvrir hors ligne,
   parce qu'un module ES refuse de se charger depuis file://.

       node build.mjs

   Nécessite esbuild (npm install), uniquement pour cette étape.
   ========================================================================== */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = dirname(fileURLToPath(import.meta.url));
const read = (...p) => readFileSync(join(root, ...p), 'utf8');

/* Les feuilles de style, dans l'ordre où index.html les déclare : l'ordre de
   la cascade compte, on le relit depuis le HTML plutôt que de le recopier. */
const html = read('index.html');

const cssBlock = /<!--__CSS__-->([\s\S]*?)<!--\/__CSS__-->/.exec(html);
const jsBlock  = /<!--__JS__-->([\s\S]*?)<!--\/__JS__-->/.exec(html);
if (!cssBlock || !jsBlock) throw new Error('Marqueurs __CSS__ / __JS__ absents de index.html');

const cssFiles = [...cssBlock[1].matchAll(/href="([^"]+\.css)"/g)].map(m => m[1]);
if (!cssFiles.length) throw new Error('Aucune feuille de style trouvée dans le bloc __CSS__');

const css = cssFiles.map(f => `/* ---- ${f} ---- */\n` + read(f)).join('\n');

/* Le JavaScript est replié par esbuild : les modules ES deviennent une seule
   fonction anonyme, ce qui supprime la contrainte du protocole file://. */
const bundled = await build({
  entryPoints: [join(root, 'assets/js/main.js')],
  bundle: true,
  format: 'iife',
  charset: 'utf8',
  legalComments: 'none',
  write: false,
  logLevel: 'warning'
});
const js = bundled.outputFiles[0].text;

/* Le manifeste redevient une URL de données : dans un fichier unique il n'y a
   pas de manifest.json à côté. */
const manifest = JSON.stringify(JSON.parse(read('manifest.json')));
const manifestURI = 'data:application/manifest+json,' + encodeURIComponent(manifest);

/* Attention : les remplacements passent par une fonction, jamais par une
   chaîne. Dans une chaîne de remplacement, « $$ » signifie « un $ » pour
   JavaScript — ce qui transformerait silencieusement le raccourci $$ du code
   en $ et casserait le site. La fonction, elle, insère le texte tel quel. */
const put = (hay, needle, value) => hay.replace(needle, () => value);

const single = [
  [cssBlock[0], '<style>\n' + css + '\n</style>'],
  [jsBlock[0],  '<script>\n' + js + '\n</script>'],
  ['href="manifest.json"', 'href="' + manifestURI + '"'],
  ['href="assets/icon.svg"', 'href="data:image/svg+xml,' + encodeURIComponent(read('assets/icon.svg')) + '"']
].reduce((acc, [needle, value]) => put(acc, needle, value), html);

/* Garde-fou : le raccourci $$ doit survivre au repliage. */
if (!single.includes('$$')) throw new Error('Le raccourci $$ a disparu du fichier unique');

mkdirSync(join(root, 'public'), { recursive: true });
writeFileSync(join(root, 'public', 'index.html'), single);

console.log(`public/index.html — ${Math.round(single.length / 1024)} Ko`);
console.log(`  ${cssFiles.length} feuilles de style repliées · ${Math.round(js.length / 1024)} Ko de JavaScript`);
