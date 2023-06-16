// Add Express
const express = require("express");
const testPlaywright = require("./src/playwright");
const metric = require("./src/metric");
// Initialize Express
const app = express();
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/testplaywright", async (req, res) => {
  console.log("testPlaywright", testPlaywright);
  const browser = await testPlaywright();
  metric.storeBrowser(browser);
  metric.increateCount();
  const count = metric.getCount();
  res.status(200).send(`Playwright instance launched, total count ${count}`);
});

app.get("/killall", async (req, res) => {
  await metric.killAllBrowsers();
  const count = metric.getCount();
  res.status(200).send(`All borwsers killed total count ${count}`);
});
// Initialize server
app.listen(1337, () => {
  console.log("Running on port 1337.");
});

module.exports = app;
