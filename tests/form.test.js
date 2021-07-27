const { APP_URL } = require('./consts');

describe('Credit card', () => {
  beforeEach(async () => {
    await page.goto(APP_URL);
  });  
  it('has card owner name', async () => {
    await page.waitForSelector('#cc-name');
  });
  it('has card number', async () => {
    await page.waitForSelector('#cc-number');
  });
  it('has expiration date', async () => {
    await page.waitForSelector('#cc-exp');
  });
  it('has security code', async () => {
    await page.waitForSelector('#x_card_code');
  });
});
