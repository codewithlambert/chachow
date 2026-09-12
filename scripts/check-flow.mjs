import { chromium } from 'playwright';

const BASE = 'http://localhost:5173';
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(String(e)));

await page.goto(BASE + '/', { waitUntil: 'networkidle' });
console.log('mobile "/" (fresh, logged out) ->', new URL(page.url()).pathname);

await page.click('a'); // splash is tap-anywhere
await page.waitForLoadState('networkidle');
console.log('after tapping splash ->', new URL(page.url()).pathname);

for (let i = 0; i < 3; i++) {
  await page.click('button:has-text("Next"), button:has-text("Get Started")');
  await page.waitForTimeout(150);
  console.log(`after onboarding step ${i + 1} ->`, new URL(page.url()).pathname);
}

console.log('errors:', errors);
await browser.close();
