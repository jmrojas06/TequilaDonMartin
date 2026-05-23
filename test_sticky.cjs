const puppeteer = require('puppeteer');
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await sleep(1000);

  // Click age gate if present
  try {
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const txt = await page.evaluate(el => el.textContent, btn);
      const lower = (txt || '').toLowerCase();
      if (lower.includes('mayor') || lower.includes('soy') || lower.includes('confirmar') || lower.includes('entrar') || lower.includes('edad')) {
        await btn.click();
        await sleep(1500);
        break;
      }
    }
  } catch(e) { console.log('age gate skip', e.message); }

  // Find trilogy section bounds
  const bounds = await page.evaluate(() => {
    const section = document.getElementById('trilogia');
    if (!section) return null;
    const rect = section.getBoundingClientRect();
    return { top: rect.top + window.scrollY, height: section.offsetHeight };
  });
  console.log('Section bounds:', JSON.stringify(bounds));

  const snapshots = [0.05, 0.33, 0.50, 0.66, 0.85];
  for (const pct of snapshots) {
    const scrollY = Math.round(bounds.top + pct * (bounds.height - 900));
    await page.evaluate(y => window.scrollTo(0, y), scrollY);
    await sleep(1800);
    const prog = await page.evaluate(() => {
      const section = document.getElementById('trilogia');
      const rect = section.getBoundingClientRect();
      const range = section.offsetHeight - window.innerHeight;
      return Math.max(0, Math.min(1, -rect.top / range));
    });
    await page.screenshot({ path: `fix_${Math.round(pct*100)}pct.png` });
    console.log(`pct=${pct} scrollY=${scrollY} actualProgress=${prog.toFixed(3)}`);
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
