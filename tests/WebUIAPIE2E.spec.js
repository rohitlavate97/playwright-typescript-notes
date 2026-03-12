const {test,expect,request} = require('@playwright/test');
//while login, payload stored as JavaScript object
const loginPayload = {
    "userEmail": "rohit.lavate287@gmail.com",
    "userPassword": "Admin@123"
}

const orderPayload = {
    orders: [
        {
    "country": "India",
    "productOrderedId": "6960eac0c941646b7a8b3e68"
        }
    ]
}

let token, apiContext, orderId;

test.beforeAll("Extracting token", async() =>{
    apiContext = await request.newContext();
    const loginRes = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
        });
    const loginResJson = await loginRes.json();
    //console.log(loginResJson);
    token = loginResJson.token;
    console.log(token);
});

test.only("E2E testing with use of UI and API's", async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    },token);
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/auth/user");
    const products = page.locator('.card-body');
    await page.locator('.card-body b').first().waitFor();
    await products.filter({hasText: productName}).getByRole("button",{name:" Add To Cart"}).click();
    const orderResponse =await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        data: orderPayload,
        headers: {
           'Authorization': token,
           'Content-Type': 'application/json'
        }
    })
    const orderResponseJson = await orderResponse.json();
    orderId = orderResponseJson.orders[0];
    console.log(orderId);
});

// test.only("API Test", async()=>{

// });