const {getDocument, queries} = require('pptr-testing-library')
const {getByRole} = queries
const { APP_URL } = require('./consts');

describe('Dialog behaviour', () => {
  let document;
  beforeEach(async () => {
    await page.goto(APP_URL);
    document = await getDocument(page);
  });  
  it('starts hidden', async () => {
    await getByRole(document, 'dialog', { hidden: true});
  });
  it('is visible when toggle', async () => {
    await page.click('#dialog-toggle');
    await getByRole(document, 'dialog', { visible: true});
  });
    it('is hidden when closed', async () => {
    await page.click('#dialog-toggle');
    await getByRole(document, 'dialog', { visible: true});
    await page.click('#close-dialog');
    await getByRole(document, 'dialog', { hidden: true});
  });
});
