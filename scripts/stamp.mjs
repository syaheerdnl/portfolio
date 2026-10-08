// Adds a content hash to every local asset link so browsers and Cloudflare
// fetch the new file after each change (CSS, images, the resume PDF).
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const hash = (file) => createHash('md5').update(readFileSync(file)).digest('hex').slice(0, 8);

let html = readFileSync('public/index.html', 'utf8');
html = html.replace(/"\/((?:assets\/)?[\w.-]+\.(?:css|webp|png|jpg|svg|pdf))(\?v=[a-f0-9]+)?"/g, (m, path) => {
    const file = `public/${path}`;
    return existsSync(file) ? `"/${path}?v=${hash(file)}"` : m;
});
writeFileSync('public/index.html', html);
console.log('stamped asset links');
