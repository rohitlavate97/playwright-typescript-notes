// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 60000,

  // expect: {
  //   timeout: 5000
  // },

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  reporter: 'html',

  use: {
    baseURL: 'https://rahulshettyacademy.com/client',
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
});
