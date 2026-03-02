const {test, expect} = require("@playwright/test");
test("Get By Locator", async ({browser}) => {
    const context =await browser.newContext();
    const page = await context.newPage();
    page.goto("https://rahulshettyacademy.com/angularpractice/");
    //getByLabel --> Any text written in label tag, if checkbox available their, playwright will
    //intelligently find the checkbox and see whenever clickable operation is available in that zone.
    //(it is possible when, we click on label tag, it will automatically click on checkbox, as label tag is associated with checkbox, so it will click on checkbox)
    await page.getByLabel("Check me out if you Love IceCreams!").click(); //we can use check() also
    await page.getByLabel("Student").check(); 
    await page.getByLabel("Gender").selectOption("Female");
    //getByLabel() --> will not work for Name,Email, Password, Date fields on this page, 
    // as they are not associated with label tag, so we can use getByPlaceholder() for these fields
    //For Email label is present, but it is not associated with input field,so getByLabel() will not work
    await page.getByPlaceholder("Password").fill("admin@123");
    //For submit button, we can use getByRole() as it is button role, and it has text submit
    //<input class="btn btn-success" type="submit" value="Submit"> -->As see here, it should have btn class or <button>,
    //Playwright will filter all buttons on page and find the one which has text submit, and click on it
    await page.getByRole("button", {name: "Submit"}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", {name: "Shop"}).click();  //gets all links and find the one which has text shop, and click on it
    //On Shop page, when you know exactly what you want --> use filter() -->it takes has?,hasNot?, hasText?, hasNotText? as parameter,
    //and filter element based on that
    //await page.locator("app-card").filter({has: page.getByRole("heading", {name: "Blackberry"})}).locator("text= Add To Cart").click();
    await page.locator("app-card").filter({hasText: "Blackberry"}).getByRole("button").click(); 
    //As only one button is present in card, no need to mention name
    await page.pause();
});