/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  // CI settings
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporting
  reporter: [
    ['html', { open: 'on-failure' }],
    ['list']
  ],

  // Global test settings
  use: {
    baseURL: 'https://demowebshop.tricentis.com',

    headless: false, // change to true for CI

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    actionTimeout: 10000,
    navigationTimeout: 15000,
  },

  // Browser configuration
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment if needed later
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});