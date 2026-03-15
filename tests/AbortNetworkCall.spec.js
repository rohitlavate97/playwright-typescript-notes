// Import Playwright test utilities
const { test, expect } = require('@playwright/test');


// Run only this test (used during debugging)
test.only("Browser context validations - error login", async ({ browser }) => {

    // Create a new isolated browser context
    // Each context acts like a fresh browser profile
    const context = await browser.newContext();

    // Create a new page inside the context
    const page = await context.newPage();


    // Intercept all CSS requests and abort them
    // This speeds up test execution because stylesheets won't load
    await page.route('**/*.css', route => route.abort());


    // Define locators (page elements)
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");


    // Listen to every network request made by the browser
    page.on('request', request => {
        console.log("Request URL:", request.url());
    });


    // Listen to every network response received
    page.on('response', response => {
        console.log("Response URL:", response.url(), "Status:", response.status());
    });


    // Navigate to application login page
    await page.goto("https://rahulshettyacademy.com/loginPagePractise/");


    // Print page title in console
    console.log("Page Title:", await page.title());

});