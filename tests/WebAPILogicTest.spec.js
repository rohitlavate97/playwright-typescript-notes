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

