/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_tests.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.livejournal.com',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    header: './pages/header.js',
    loginPage: "./pages/login.js",
    mainPage: './pages/main.js'
  },
  name: 'LJTest'
}