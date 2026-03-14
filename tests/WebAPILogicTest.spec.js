const {test,expect,request} = require('@playwright/test');
const { APIUtils } = require('../utils/APIUtils');
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

let response;

test.beforeAll("Extracting token", async() =>{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayload);
    response = await apiUtils.createOrder(orderPayload);
});

test("", async()=>{});