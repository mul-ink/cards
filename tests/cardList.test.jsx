const {getDocument, queries} = require('pptr-testing-library')
const {getByText} = queries
const { APP_URL } = require('./consts');
// const { createServer, Response } = require('miragejs')

// let server;
// let document;

describe('Card list', () => {
  let document;
  beforeEach(async () => {
    // server = createServer();
    document = await getDocument(page)
    await page.goto(APP_URL);
  });
  // afterEach(() => {
  //   server.shutdown()
  // })
  it('displays loading at first', async () => {
    loading = await getByText(document, 'loading...');
  });
  it('shows error on API error', async () => {
    await getByRole(document, 'alert')
  });
});
