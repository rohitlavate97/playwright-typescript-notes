const {test,expect} = require('@playwright/test');
test("@Securrity Test request intercept",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("rohit.lavate287@gmail.com");
    await page.locator("#userPassword").fill("Admin@123");
    await page.locator("[value='Login']").click();
    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-order-details?id=*",
        route => route.continue({url:
            "https://rahulshettyacademy.com/api/ecom/order/get-order-details?id=62166f884b053f6765465b6"
        }))
    await page.locator("button:has-text('view')").first().click();
    await expect(page.locator(" p").last()).toHaveText(" You are not authorize to view the order");
    await page.pause();
});