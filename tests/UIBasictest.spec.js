const { test,expect } = require('@playwright/test')
//These test are executed to launch the browser and provide a fresh page to each test
//to write new test write test() which takes two parameters, first is the name of the test,
// and second is an async function which contains the test steps
test('First playwright test',async () => {
  //Playwrright code
});

test("Browser context declareation", async ({browser}) =>
{
    //chrome plugins or cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
})

test("page playwright test", async ({page}) =>{
    await page.goto("https://www.google.com/");
    //get title assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})

test("Brwoser context playwright test", async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //await page.locator('#username').type("rahulshetty");
    await page.locator('#username').fill("rahulshetty");
    await page.locator('#password').fill("learning");
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
})

test("Browser context-validating Error login", async({ browser }) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const username = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    await username.fill("rahulshetty");
    await password.fill("Learning@830$3mK2");
    await signInBtn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signInBtn.click();
    //console.log(await page.locator(".card-body a").textContent()); //Strict mode violation, multiple element will be found
    //console.log(await page.locator(".card-body a").first().textContent());  //This works
    //console.log(await page.locator(".card-body a").nth(0).textContent()); //This also works
    const cardTitles = page.locator(".card-body a");
    console.log(await cardTitles.first().textContent());  //for textContent() --> Page will wait  until locator is attached to dom.
    const allTitles = await cardTitles.allTextContents(); //for allTextContent() -->returns array and  page don't wait, as no synchronization provided in playwright 
    // so if we comment previous line test will fail.
    console.log(allTitles);
    
})