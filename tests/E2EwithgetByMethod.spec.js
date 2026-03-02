const {test, expect} = require('@playwright/test');
test("E2E Using getBy Methods", async ({browser}) => {
    const email = "rohit.lavate287@gmail.com";
    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto("https://rahulshettyacademy.com/client/auth/user");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Admin@123");
    await page.getByRole("button",{name:"Login"}).click();
    const products = page.locator(".card-body");
    const productName = 'ZARA COAT 3';
    await page.waitForLoadState("networkidle");
    await page.locator('.card-body b').first().waitFor();
    await products.filter({hasText: productName})
        .getByRole("button",{name:" Add To Cart"}).click();
    await page.getByRole("listitem").getByRole("button",{name:"  Cart "}).click(); 
    //Above line may identify multiple elements, so we navigated only in header ie listitem to cart
    await page.locator("div li").first().waitFor();
    await expect(page.getByText(productName)).toBeVisible();
    await page.getByRole("button",{name:"Checkout"}).click();
    await page.locator('.field.small').filter({ hasText: 'CVV Code' }).locator('input').fill('123');
    await page.locator('.field').filter({ hasText: 'Name on Card' }).locator('input').fill('Rohit');
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.getByRole("button",{name:"India"}).nth(1).click();
    await page.getByText("Place Order ").click();
    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
    await page.pause();
});