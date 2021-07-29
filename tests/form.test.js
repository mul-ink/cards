const {getDocument, queries} = require('pptr-testing-library')
const {getByTitle} = queries
const { APP_URL } = require('./consts');

describe('Credit card form', () => {
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
  it('is invalid when empty', async () => {
    const document = await getDocument(page);
    const form = await getByTitle(document, 'Add credit card');
    const isFormValid = await form.evaluate(cardForm => cardForm.reportValidity(), form);
    expect(isFormValid).toBe(false);
  });
});
