const { expect, test } = require("@playwright/test");
test("Validating wait mechanism in playwright", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("rohit.lavate287@gmail.com");
    await page.locator('#userPassword').fill('Admin@123');
    await page.locator("[value='Login']").click();
    //Implement wait mechanism --> In network all data is driven by API calls/Service calls, 
    // so we can wait for API call to get completed and then move forward with next step (Fetch/xhr)
    //await page.waitForLoadState('networkidle'); //wait for network to be idle, means all API calls are completed
    //but above line is not recommended in official documentation, as it will wait for all API calls to get completed, 
    // It may fail sometimes
    //so solution is use waitFor() method --> It will wait for specific Single element, not for multiple
    await page.locator(".card-body b").first().waitFor(); //wait for first element to be visible
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
})