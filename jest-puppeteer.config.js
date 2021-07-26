process.env.BASE_PATH = 'https://cpd-wkc.apps.cpd450-staging.cp.fyre.ibm.com';
process.env.HEADLESS = true;

module.exports = {
  launch: {
    dumpio: false,
    headless: process.env.HEADLESS,
    ignoreHTTPSErrors: true,
    product: 'chrome',
    exitOnPageError: false,
    args: process?.env?.IS_CLOUD
      ? ['--disable-web-security', '--disable-features=IsolateOrigins,site-per-process']
      : undefined,
    defaultViewport: {
      width: 1280,
      height: 1024,
    },
  },
  browserContext: 'default',
};