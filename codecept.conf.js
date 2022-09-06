/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_tests.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.livejournal.com/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'LJTest'
}