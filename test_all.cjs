const puppeteer = require('puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await sleep(800);

  // Age gate
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

  // Carousel at 33% (Añejo)
  const bounds = await page.evaluate(() => {
    const s = document.getElementById('trilogia');
    const r = s.getBoundingClientRect();
    return { top: r.top + window.scrollY, height: s.offsetHeight };
  });
  await page.evaluate(y => window.scrollTo(0, y), Math.round(bounds.top + 0.33 * (bounds.height - 900)));
  await sleep(1800);
  await page.screenshot({ path: 'carousel_anejo.png' });

  // Carousel at 66% (Cristalino)
  await page.evaluate(y => window.scrollTo(0, y), Math.round(bounds.top + 0.66 * (bounds.height - 900)));
  await sleep(1800);
  await page.screenshot({ path: 'carousel_cristalino.png' });

  // Special editions section
  await page.evaluate(() => {
    const s = document.getElementById('ediciones');
    if (s) s.scrollIntoView();
  });
  await sleep(1800);
  await page.screenshot({ path: 'special_editions.png' });

  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
