const { test } = require('@playwright/test')
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