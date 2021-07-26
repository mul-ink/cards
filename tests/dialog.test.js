const { APP_URL } = require('./consts');

describe('Dialog behaviour', () => {
  beforeEach(async () => {
    await page.goto(APP_URL);
  });  
  it('It starts not visible', async () => {
    await page.waitForSelector('#dialog', { visible: false});
  });
  it('It is visible when toggle ', async () => {
    await page.click('#dialog-toggle');
    await page.waitForSelector('#dialog', { visible: true});
  });
    it('It is hidden when closed ', async () => {
    await page.click('#dialog-toggle');
    await page.waitForSelector('#dialog', { visible: true});
    await page.click('#close-dialog');
    await page.waitForSelector('#dialog', { hidden: true});
  });
});
