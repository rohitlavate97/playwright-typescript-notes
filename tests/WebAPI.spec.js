//request is required to expose API (for web testing)
const {test,expect,request} = require('@playwright/test');
//while login, payload stored as JavaScript object
const loginPayload = {
    "userEmail": "rohit.lavate287@gmail.com",
    "userPassword": "Admin@123"
}
let token; // declared at module scope so it's shared across hooks and tests
test.beforeAll("Login via API",async() =>{
    const apiContext = await request.newContext();
    // with use of this above line, we can send info inside context --> Like loading baseUrl/header/http credentials/proxy things
    //https://rahulshettyacademy.com/api/ecom/auth/login
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
            //also can add header
        });
        //Method to check if response we got is success --> loginResponse.ok()
        //expect(loginResponse.ok()).toBeTruthy();
        //Grab that token variable from Response
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token; // assign to module-scoped token
        console.log(token);
});

test("Client App Login with API",async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    // reuse the token obtained in beforeAll
    console.log(token);
    //Insert token in localStorage
    page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    },token);     // parameter needed for function,send as second argument
    const email = '';
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/auth/user");
    const products =await page.locator(".card-body");
    //await page.waitForLoadState("networkidle");
    await page.locator('.card-body b').first().waitFor();
    await products.filter({hasText: productName})
        .getByRole("button",{name:" Add To Cart"}).click();
})