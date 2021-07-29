const {getDocument, queries} = require('pptr-testing-library')
const {getByText} = queries
const { APP_URL } = require('./consts');

let document;

describe('Card list', () => {
  beforeEach(async () => {
    await page.goto(APP_URL);
    document = await getDocument(page)
  });
  it('displays loading at first', async () => {
    await getByText(document, 'loading...');
  });
});
