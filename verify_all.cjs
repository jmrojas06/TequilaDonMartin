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
        await btn.click();
        await sleep(1200);
        break;
      }
    }
  } catch(e) {}

  // Hero — top of page
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(1500);
  await page.screenshot({ path: 'verify_hero.png' });
  console.log('hero done');

  // Hero scrolled slightly to see bottles more
  await page.evaluate(() => window.scrollTo(0, 300));
  await sleep(800);
  await page.screenshot({ path: 'verify_hero_scroll.png' });
  console.log('hero scroll done');

  // Carousel section (TrilogySection)
  await page.evaluate(() => {
    const el = document.getElementById('linea-clasica');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(1500);
  await page.screenshot({ path: 'verify_carousel.png' });
  console.log('carousel done');

  // Special editions
  await page.evaluate(() => {
    const el = document.getElementById('ediciones');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(1500);
  await page.screenshot({ path: 'verify_special_top.png' });
  console.log('special top done');

  // First special edition (carbon)
  await page.evaluate(() => {
    const el = document.getElementById('edicion-carbon');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(1500);
  await page.screenshot({ path: 'verify_carbon.png' });
  console.log('carbon done');

  // Flamingo
  await page.evaluate(() => {
    const el = document.getElementById('edicion-flamingo');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await sleep(1500);
  await page.screenshot({ path: 'verify_flamingo.png' });
  console.log('flamingo done');

  await browser.close();
  console.log('all done');
})().catch(e => { console.error(e); process.exit(1); });
