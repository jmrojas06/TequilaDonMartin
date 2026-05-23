const puppeteer = require('puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await sleep(800);
  try {
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const txt = await page.evaluate(el => el.textContent, btn);
      if ((txt || '').toLowerCase().includes('mayor')) { await btn.click(); await sleep(1200); break; }
    }
  } catch(e) {}

  // Scroll to first special edition bottle (carbon)
  await page.evaluate(() => {
    const el = document.getElementById('edicion-carbon');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(2000);
  await page.screenshot({ path: 'sp_carbon.png' });

  // Scroll to flamingo
  await page.evaluate(() => {
    const el = document.getElementById('edicion-flamingo');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(2000);
  await page.screenshot({ path: 'sp_flamingo.png' });

  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
