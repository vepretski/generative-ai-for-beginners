import { copyFile, mkdir, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';

const distDir = 'dist';
const requiredFiles = ['index.html', '.nojekyll', 'CNAME'];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const file of requiredFiles) {
  await stat(file);
  await copyFile(file, join(distDir, file));
}

console.log(`Built 7ya.io static site in ${distDir}/`);
