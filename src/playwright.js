const { chromium } = require("playwright");

async function testPlaywright() {
  const browser = await chromium.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("https://google.co.in");
  return browser;
}

module.exports = testPlaywright;
