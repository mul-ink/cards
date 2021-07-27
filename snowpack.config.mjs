export default {
  exclude: [
    '**/node_modules/**/*',
    '**/dist/**/*',
    '**/LICENSE',
    '**/package*.json',
    '**/README.md',
    '**/screenshot.png',
    '**/snowpack.config.mjs',
    '**/jest-puppeteer.config.js',
    '**/tests/**/*',
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};