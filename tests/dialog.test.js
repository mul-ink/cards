const { APP_URL } = require('./consts');

describe('Dialog behaviour', () => {
  beforeEach(async () => {
    await page.goto(APP_URL);
  });  
  it('starts hidden', async () => {
    await page.waitForSelector('#dialog', { hidden: true});
  });
  it('is visible when toggle', async () => {
    await page.click('#dialog-toggle');
    await page.waitForSelector('#dialog', { visible: true});
  });
    it('is hidden when closed', async () => {
    await page.click('#dialog-toggle');
    await page.waitForSelector('#dialog', { visible: true});
    await page.click('#close-dialog');
    await page.waitForSelector('#dialog', { hidden: true});
  });
});
