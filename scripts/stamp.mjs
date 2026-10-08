// Adds a content hash to the CSS link so browsers and Cloudflare fetch the new file after each change.
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const css = readFileSync('public/assets/app.css');
const hash = createHash('md5').update(css).digest('hex').slice(0, 8);
const html = readFileSync('public/index.html', 'utf8');
const out = html.replace(/\/assets\/app\.css(\?v=[a-f0-9]+)?"/, `/assets/app.css?v=${hash}"`);
writeFileSync('public/index.html', out);
console.log(`app.css?v=${hash}`);
