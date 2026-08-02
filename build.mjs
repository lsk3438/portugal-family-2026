// Génère les deux formes du site :
//   public/index.html — fichier unique, tout en ligne (Vercel, envoi par message, ouverture locale)
//   index.html        — page légère qui charge src/style.css, src/images.js, src/trip.js, src/app.js
//                       (c'est cette version que sert GitHub Pages depuis la branche main)
//   src/images.js     — images.json enveloppé pour être chargé par une balise <script>
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const src = join(root, 'src');
const read = f => readFileSync(join(src, f), 'utf8');

const images = read('images.json');
const html = read('index.template.html')
  .replace('/*__CSS__*/', () => read('style.css'))
  .replace('/*__DATA__*/', () => 'const IMAGES = ' + images + ';\n' + read('trip.js'))
  .replace('/*__APP__*/', () => read('app.js'));

mkdirSync(join(root, 'public'), { recursive: true });
writeFileSync(join(root, 'public', 'index.html'), html);
console.log(`public/index.html généré — ${Math.round(html.length / 1024)} Ko`);

// --- version éclatée, servie par GitHub Pages -------------------------------
writeFileSync(join(src, 'images.js'), 'const IMAGES = ' + images.trim() + ';\n');

const split = read('index.template.html')
  .replace(/<style>\s*\/\*__CSS__\*\/\s*<\/style>/,
           '<link rel="stylesheet" href="src/style.css">')
  .replace(/<script>\s*\/\*__DATA__\*\/\s*<\/script>/,
           '<script src="src/images.js"></script>\n<script src="src/trip.js"></script>')
  .replace(/<script>\s*\/\*__APP__\*\/\s*<\/script>/,
           '<script src="src/app.js"></script>');

for (const marker of ['__CSS__', '__DATA__', '__APP__']) {
  if (split.includes(marker)) throw new Error('Marqueur non remplacé : ' + marker);
}

writeFileSync(join(root, 'index.html'), split);
console.log(`index.html généré — ${Math.round(split.length / 1024)} Ko + fichiers séparés`);
