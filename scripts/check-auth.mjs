import { chromium } from 'playwright';

const BASE = 'http://localhost:5173';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });

// 1. Visiting a gated route while logged out should bounce to /sign-in
await page.goto(BASE + '/browse', { waitUntil: 'networkidle' });
console.log('GET /browse (logged out) ->', new URL(page.url()).pathname);

// 2. Sign in, then confirm we land somewhere in the app and can now reach /browse
await page.goto(BASE + '/sign-in', { waitUntil: 'networkidle' });
await page.click('button[type="submit"]');
await page.waitForLoadState('networkidle');
console.log('after Sign In ->', new URL(page.url()).pathname);

await page.goto(BASE + '/profile', { waitUntil: 'networkidle' });
console.log('GET /profile (logged in) ->', new URL(page.url()).pathname);

await browser.close();
