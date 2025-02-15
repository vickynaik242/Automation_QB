//@ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config ={
  testDir: './tests',
  timeout: 90 * 1000,
  expect: {
    timeout: 20000
  },

  reporter: 'html',
  projects: [
   // {
   //   name: 'Microsoft Edge',
   //   use: { args: ["--start-maximized"], ...devices['Desktop Edge'], channel: 'msedge', headless: false}, // or 'msedge-dev'
   // },

    {
      name: 'chromium',
      use: { args: ['--disable-web-security'], ...devices['Desktop Chrome'], headless: false, ignoreHTTPSErrors: true}, 
    }
  ],

};

module.exports = config;

