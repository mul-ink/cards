const {getDocument, queries} = require('pptr-testing-library')
const {getByRole, getByText} = queries
const { APP_URL } = require('./consts');

describe('Dialog behaviour', () => {
  let document;
  let addCardButton;
  beforeEach(async () => {
    await page.goto(APP_URL);
    document = await getDocument(page);
    addCardButton = await getByText(document, 'Add Card');
  });  
  it('starts hidden', async () => {
    await getByRole(document, 'dialog', { hidden: true});
  });
  it('is visible when add card button is pressed', async () => {
    await addCardButton.evaluate(button => button.click());
    await getByRole(document, 'dialog', { visible: true});
  });
    it('is hidden when closed', async () => {
    await addCardButton.evaluate(button => button.click());
    await getByRole(document, 'dialog', { visible: true});
    await addCardButton.evaluate(button => button.click());
    await getByRole(document, 'dialog', { hidden: true});
  });
});
