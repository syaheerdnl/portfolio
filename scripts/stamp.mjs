// Adds a content hash to asset links so browsers and Cloudflare fetch the new file after each change.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const hash = (file) => createHash('md5').update(readFileSync(file)).digest('hex').slice(0, 8);
const files = ['assets/app.css', 'Muhammad_Syaheer_Daniel_Resume.pdf'];

let html = readFileSync('public/index.html', 'utf8');
for (const f of files) {
    const v = hash(`public/${f}`);
    const esc = f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(`/${esc}(\\?v=[a-f0-9]+)?"`, 'g'), `/${f}?v=${v}"`);
    console.log(`${f}?v=${v}`);
}
writeFileSync('public/index.html', html);
