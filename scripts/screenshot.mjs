import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';

const OUT = process.env.SHOT_DIR || './.screenshots';
const BASE = 'http://localhost:5173';
fs.mkdirSync(OUT, { recursive: true });

const routes = [
  { path: '/', name: 'home' },
  { path: '/dish', name: 'dish-detail' },
  { path: '/tracking', name: 'order-tracking' },
];

const viewports = [
  { name: 'mobile', width: 390, height: 900 },
  { name: 'desktop', width: 1440, height: 960 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });

  for (const r of routes) {
    await page.goto(BASE + r.path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const file = path.join(OUT, `${r.name}-${vp.name}.png`);
    await page.screenshot({ path: file, fullPage: vp.name === 'desktop' ? false : true });
    console.log('shot:', vp.name, r.path, '->', file);
  }

  if (errors.length) console.log(`console errors (${vp.name}):`, errors);
  await page.close();
}

await browser.close();
console.log('done');
