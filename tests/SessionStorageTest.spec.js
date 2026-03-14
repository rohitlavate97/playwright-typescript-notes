const {test,expect} = require('@playwright/test');
let webContext;   // make it global for this file
test.beforeAll(async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/auth/user");
    await page.locator("#userEmail").fill("rohit.lavate287@gmail.com");
    await page.locator("#userPassword").fill("Admin@123");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    //We have to store cookies, setting etc in json
    await context.storageState({path:'state.json'});
    webContext = await browser.newContext({storageState:'state.json'});
});

test("Client App Login using StorageState",async()=>{ //we don't need {page} here, as dynamically created
    const page = await webContext.newPage();
    const email = "";
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client");
    const products = await page.locator(".card-body");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
});