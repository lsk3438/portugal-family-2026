// Assemble le site en un fichier unique : public/index.html
// Utilisé par Vercel au déploiement (node build.mjs) et utilisable en local.
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
