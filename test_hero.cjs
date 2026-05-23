const puppeteer = require('puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await sleep(800);

  // Click age gate
  try {
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const txt = await page.evaluate(el => el.textContent, btn);
      const lower = (txt || '').toLowerCase();
      if (lower.includes('mayor') || lower.includes('soy') || lower.includes('edad')) {
        await btn.click();
        await sleep(1200);
        break;
      }
    }
  } catch(e) {}

  // Screenshot the hero at scroll 0
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(800);
  await page.screenshot({ path: 'hero_top.png' });
  console.log('hero_top done');

  // Screenshot mid-hero to see bottles position
  await page.evaluate(() => window.scrollTo(0, 400));
  await sleep(600);
  await page.screenshot({ path: 'hero_mid.png' });
  console.log('hero_mid done');

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
