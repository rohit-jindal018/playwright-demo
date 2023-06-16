class InstanceMetric {
  count = 0;
  browserArr = [];

  increateCount() {
    this.count++;
  }

  storeBrowser(browser) {
    this.browserArr.push(browser);
  }

  async killAllBrowsers() {
    return new Promise((resolve, reject) => {
      const browPromises = this.browserArr.map((brow) => brow.close());
      Promise.all(browPromises).then(() => {
        this.count = 0;
        resolve(true);
      });
    });
  }

  getCount() {
    return this.count;
  }
}

const instanceMetric = new InstanceMetric();

module.exports = instanceMetric;
