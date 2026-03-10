const {test, expect } = require('@playwright/test');
test("Calendar validations", async ({browser}) => {
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label__labelText').click();
    await page.locator('.react-calendar__navigation__label__labelText').click();
    await page.getByText(year).click();
    //now we have to map 6 to June --> get all months i.e 12 elements then filter june
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber-1)).click();
    //For dates we have duplicates --> so use xpath
    await page.locator("//abbr[text()='"+date+"']").click();
    //In property value =2027-06-15, but on UI = 06/15/2027. So need to split date,month and year.
    //But these 3 available in the element already
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for(let index = 0; index< input.length; index++){
        const value = inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }
    await page.pause();
});