export default {
  exclude: [
    '**/dist/**/*',
    '**/LICENSE',
    '**/package*.json',
    '**/README.md',
    '**/screenshot.png',
    '**/snowpack.config.mjs',
    '**/jest-puppeteer.config.js',
    '**/node_modules/**/*',
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};