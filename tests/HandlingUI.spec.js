const {test, expect} = require('@playwright/test');
test("Handling Select dropdown in playwright", async ({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    await username.fill("rahulshettyacademy");
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption("Teacher");
    //await page.pause(); //This will pause the test execution and open the playwright inspector,
    //  where we can interact with the page and see the test steps
    await page.locator('.radiotextsty').last().click(); 
    //first() --> will select first element, last() --> will select last element, 
    // nth(1) --> will select second element. These are used when multiple elements are found for the locator,
    //  and we want to select specific element.
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked(); //toBeChecked() --> will check if the element is checked or not, it will return true or false
    //console.log(await expect(page.locator('.radiotextsty').last()).isChecked()); //isChecked() --> will check if the element is checked or not, it will return true or false
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    //await page.locator('.terms').waitFor({ state: 'visible', timeout: 5000 });
    await page.locator('#terms').uncheck(); //uncheck() --> will uncheck the checkbox, if it is already checked, if it is not checked, it will do nothing
    expect(await page.locator('#terms').isChecked()).toBeFalsy(); 
    //toBeFalsy() --> will check if the element is not checked, it will return true, if it is checked, it will return false
    //toBeTruthy() --> will check if the element is checked, it will return true, if it is not checked, it will return false
});

test("UI Blinking text verification", async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    await expect(documentLink).toHaveAttribute("class","blinkingText");
});

test("@Child window handling in playwright", async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    //page variable has knowledge of the parent window, so we can use it to interact with the parent window 
    // and also we can use it to interact with the child window.
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    //When we click on the document link, it will open a new window, 
    // so we need to handle that new window. For that we have to swith context to the new window, 
    // and then we can interact with the new window.
    //context.waitForEvent('page')  //This inovkes listener, wait for new page to open, when we click on the document link, 
    // it will open a new page, so we have to wait for that page to open
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //Wait for new page to open
        documentLink.click() //Click on the document link, which will open a new page
    ]);
    await newPage.waitForLoadState(); //Wait for the new page to load completely, before we interact with it
    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    //now swith back to the parent window, and fill the username with the domain name we got from the child window
    await page.locator('#username').fill(domain);
    //await page.pause();
    console.log(await page.locator('#username').textContent());
});