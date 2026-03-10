const {test, expect} = require('@playwright/test');
test.only("Pop Up Validations", async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com");
    await page.goBack();
    //await page.goForward();
    console.log("Checking visible element");
    await expect(page.locator("#displayed-text")).toBeVisible();
    console.log("Checking hidden element");
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    console.log("Checking confirm dialog");
    await page.locator("#confirmbtn").click();
    page.on("dialog", dialog => dialog.accept());
    await page.locator("#mousehover").hover();
    await page.pause();
});