const {getDocument, queries} = require('pptr-testing-library')
const {getByRole} = queries
const { APP_URL } = require('./consts');

describe('Fetches cards and display them in Dom', () => {
  beforeEach(async () => {
    await page.goto(APP_URL);
  });  
  it('is invalid when empty', async () => {
    const document = await getDocument(page)
    const form = await getByRole(document, 'form')
    const isFormValid = await page.evaluate(form => form.reportValidity(), form);
    expect(isFormValid).toBe(false);
  });
});
