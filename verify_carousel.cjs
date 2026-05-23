const puppeteer = require('puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await sleep(1000);

  // Click age gate
  try {
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const txt = await page.evaluate(el => el.textContent, btn);
      const lower = (txt || '').toLowerCase();
      if (lower.includes('mayor') || lower.includes('soy') || lower.includes('edad')) {
        await btn.click(); await sleep(1200); break;
      }
    }
  } catch(e) {}

  // Scroll to the trilogia section
  await page.evaluate(() => {
    const el = document.getElementById('trilogia');
    if (el) el.scrollIntoView({ behavior: 'instant' });
    else console.log('no trilogia element');
  });
  await sleep(1500);
  await page.screenshot({ path: 'car_entry.png' });
  console.log('carousel entry');

  // Scroll 30% into the sticky section (roughly first panel)
  await page.evaluate(() => {
    const el = document.getElementById('trilogia');
    if (!el) return;
    const top = el.offsetTop;
    const height = el.offsetHeight;
    window.scrollTo(0, top + height * 0.15);
  });
  await sleep(1200);
  await page.screenshot({ path: 'car_panel1.png' });
  console.log('panel 1');

  // Scroll 50%
  await page.evaluate(() => {
    const el = document.getElementById('trilogia');
    if (!el) return;
    const top = el.offsetTop;
    const height = el.offsetHeight;
    window.scrollTo(0, top + height * 0.45);
  });
  await sleep(1200);
  await page.screenshot({ path: 'car_panel2.png' });
  console.log('panel 2');

  // Scroll 75%
  await page.evaluate(() => {
    const el = document.getElementById('trilogia');
    if (!el) return;
    const top = el.offsetTop;
    const height = el.offsetHeight;
    window.scrollTo(0, top + height * 0.72);
  });
  await sleep(1200);
  await page.screenshot({ path: 'car_panel3.png' });
  console.log('panel 3');

  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
