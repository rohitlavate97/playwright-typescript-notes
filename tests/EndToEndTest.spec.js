const {test, expect} = require('@playwright/test');
test.only("Client App Login", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/auth/user");
    await page.locator("#userEmail").fill("rohit.lavate287@gmail.com");
    await page.locator("#userPassword").fill("Admin@123");
    await page.locator("[value='Login']").click();
    // No networkidle/waitForURL needed — products.first().waitFor() below handles it
    const productName = "iphone 13 pro";
    const products = page.locator(".card-body");
    await products.first().waitFor(); // wait for at least one product card to load
    const count = await products.count();
    for (let i = 0; i < count; i++) {
        if ((await products.nth(i).locator("b").textContent()).trim() === productName) {
            console.log("Product found");
            await products.nth(i).locator("text= Add To Cart").click();  //Locator based on text, not recommended.
            break;
        }
    }
    //await page.pause();
    //await page.waitForLoadState('domcontentloaded'); //Wait for the DOM content to be loaded, which means that the HTML document has been completely loaded and parsed, before we interact with the page
    await page.locator("[routerlink*='cart']").click();
    //On cart page, element don't display immediately,takes time to load page
    await page.locator("div li").first().waitFor(); 
    //you go to cart page, but previously added product is present below newly added product
    //To avoid conflict, as it will take some seconds to switch from main page to cart
    //playwright may search element in main page, but it is present in cart page, add tag in text locator
    const bool = await page.locator(`h3:has-text("${productName}")`).isVisible();  //has-text is used to find element based on text, 
    // it is recommended, as it will search for element in current page, not in main page, 
    // it will wait for element to be visible in cart page, if it is not visible in main page
    //has-text is psuedo class, isVisible() don't have autowait
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    await page.locator("text=Place Order ").waitFor();
    await page.locator('div input').nth(1).fill("123");
    await page.locator(".txt").nth(2).fill("Rohit");
    await page.locator("[placeholder*='Country']").pressSequentially("ind");
    //wait until popup displays
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionCount = await dropdown.locator("button").count();
    for(let i=0;i<optionCount;i++){
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India"){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    const email = "rohit.lavate287@gmail.com";
    expect(page.locator("div.details__user > div > label").first()).toHaveText(email);
    //Click on Place order
    await page.locator("text=Place Order ").click();
    await expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator('.em-spacer-1 .ng-star-inserted').textContent();
    console.log(orderId);
    await page.pause();
});

