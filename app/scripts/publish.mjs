// Copies the Vite build (app/dist) to the repo root, which GitHub Pages serves.
import { cpSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const appDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(appDir, 'dist');
const root = path.dirname(appDir);

for (const stale of ['assets', 'images', 'index.html', 'favicon.png']) {
  const p = path.join(root, stale);
  if (existsSync(p)) rmSync(p, { recursive: true, force: true });
}
cpSync(dist, root, { recursive: true });
console.log('Published app/dist to', root);
