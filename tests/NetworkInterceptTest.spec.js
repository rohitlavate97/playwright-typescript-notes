// Import Playwright test utilities
const { test, expect, request } = require('@playwright/test');

// Import custom API utility class used for API operations
const { APIUtils } = require('../utils/APIUtils');


// -------------------- TEST DATA --------------------

// Login credentials payload used for authentication API
const loginPayload = {
    userEmail: "rohit.lavate287@gmail.com",
    userPassword: "Admin@123"
};


// Payload used to create an order via API
const orderPayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]
};


// Fake response payload to simulate "No Orders"
const fakeOrdersPayload = {
    data: [],
    message: "No Orders"
};


// Variable to store login + order creation response
let responseData;


// -------------------- SETUP BEFORE TESTS --------------------

// Runs once before all tests
test.beforeAll(async () => {

    // Create Playwright API request context
    const apiContext = await request.newContext();

    // Create instance of API utility helper
    const apiUtils = new APIUtils(apiContext, loginPayload);

    // Login via API and create order
    // The method returns token and order information
    responseData = await apiUtils.createOrder(orderPayload);

});


// -------------------- TEST CASE --------------------

test("@Network Place Order with Mocked Orders API", async ({ page }) => {

    // Inject authentication token into browser localStorage
    // This bypasses the UI login page
    await page.addInitScript(token => {

        window.localStorage.setItem('token', token);

    }, responseData.token);


    // Intercept the "get orders for customer" API request
    await page.route(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request());
            // Replace actual backend response with fake response
            await route.fulfill({

                status: 200,
                response,
                contentType: "application/json",
                body: JSON.stringify(fakeOrdersPayload)

            });

        }
    );


    // Navigate to application
    await page.goto("https://rahulshettyacademy.com/client");


    // Click on "My Orders" button
    await page.locator("button[routerlink*='myorders']").click();


    // Wait for intercepted API response to complete
    await page.waitForResponse(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"
    );


    // Capture message displayed on UI
    const message = await page.locator(".mt-4").textContent();

    console.log("Orders Message:", message);


    // Optional assertion (recommended in real tests)
    await expect(page.locator(".mt-4")).toContainText("No Orders");

});