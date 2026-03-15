const {test,expect} = require('@playwright/test');
const { request } = require('node:http');
test.only("Browser context validations error login", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    page.route('**/*.css',route=>route.abort());
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginPagePractise/");
    console.log(await page.title());
    page.on('request',request => console.log(request.url()));
    page.on('response', response => console.log(response.url(),response.status()));
});