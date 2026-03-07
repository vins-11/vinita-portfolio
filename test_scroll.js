import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 400, height: 840 });
  await page.goto('http://localhost:5173');
  
  // Get header position
  const getHeaderY = async () => page.evaluate(() => {
    const nav = document.querySelector('nav');
    return nav ? nav.getBoundingClientRect().top : null;
  });

  const y1 = await getHeaderY();
  console.log('Header Y before scroll:', y1);

  // Scroll down
  await page.evaluate(() => { window.scrollBy(0, 500); });
  
  const y2 = await getHeaderY();
  console.log('Header Y after scroll:', y2);
  
  // Check classes
  const classes = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    return nav ? nav.className : null;
  });
  console.log('Header classes after scroll:', classes);

  await browser.close();
})();
