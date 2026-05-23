const puppeteer = require('puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await sleep(1000);

  // Age gate
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

  // 1. Hero top
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(1500);
  await page.screenshot({ path: 'screenshots/hero_top.png' });
  console.log('1. hero top');

  // 2. Hero slightly scrolled (bottles more visible)
  await page.evaluate(() => window.scrollTo(0, 280));
  await sleep(600);
  await page.screenshot({ path: 'screenshots/hero_scrolled.png' });
  console.log('2. hero scrolled');

  // 3. Special editions section (trilogia card)
  await page.evaluate(() => {
    const el = document.getElementById('ediciones');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(1500);
  await page.screenshot({ path: 'screenshots/special_trilogia.png' });
  console.log('3. special editions trilogia card');

  // 4. Tequila detail page - blanco
  await page.goto('http://localhost:5173/tequila/blanco', { waitUntil: 'networkidle0' });
  await sleep(1200);
  await page.screenshot({ path: 'screenshots/detail_blanco.png' });
  console.log('4. detail blanco');

  // 5. Tequila detail page - anejo
  await page.goto('http://localhost:5173/tequila/anejo', { waitUntil: 'networkidle0' });
  await sleep(1200);
  await page.screenshot({ path: 'screenshots/detail_anejo.png' });
  console.log('5. detail anejo');

  // 6. Tequila detail page - cristalino
  await page.goto('http://localhost:5173/tequila/cristalino-anejo', { waitUntil: 'networkidle0' });
  await sleep(1200);
  await page.screenshot({ path: 'screenshots/detail_cristalino.png' });
  console.log('6. detail cristalino');

  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
