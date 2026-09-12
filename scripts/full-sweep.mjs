import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = 'http://localhost:5173';
const OUT = process.env.SHOT_DIR || './.screenshots/sweep';
fs.mkdirSync(OUT, { recursive: true });

const AUTHED_ROUTES = ['/', '/browse', '/dish', '/cart', '/tracking', '/profile', '/orders', '/addresses', '/payment-methods'];
const PUBLIC_ROUTES = ['/splash', '/onboarding', '/sign-in'];

const browser = await chromium.launch();
let anyErrors = false;

for (const vp of [{ name: 'mobile', width: 390, height: 900 }, { name: 'desktop', width: 1440, height: 960 }]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(`[${vp.name}] pageerror: ${e}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`[${vp.name}] console: ${m.text()}`); });

  // public flow
  for (const r of PUBLIC_ROUTES) {
    await page.goto(BASE + r, { waitUntil: 'networkidle' });
    await page.waitForTimeout(200);
    await page.screenshot({ path: `${OUT}/${vp.name}${r.replace(/\//g, '_')}.png` });
  }

  // sign in as guest, then sweep authed routes
  await page.goto(BASE + '/sign-in', { waitUntil: 'networkidle' });
  await page.click('button:has-text("Continue as guest")');
  await page.waitForLoadState('networkidle');

  for (const r of AUTHED_ROUTES) {
    await page.goto(BASE + r, { waitUntil: 'networkidle' });
    await page.waitForTimeout(200);
    await page.screenshot({ path: `${OUT}/${vp.name}${r.replace(/\//g, '_') || '_home'}.png` });
  }

  if (errors.length) { anyErrors = true; console.log(errors.join('\n')); }
  await page.close();
}

await browser.close();
console.log(anyErrors ? 'SWEEP DONE — console/page errors found above' : 'SWEEP DONE — no console errors');
