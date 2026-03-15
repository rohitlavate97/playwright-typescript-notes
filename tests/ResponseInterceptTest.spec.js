// Import Playwright test utilities
// test → used to define tests
// expect → used for assertions
// request → used for API testing
const { test, expect, request } = require('@playwright/test');

// Import custom API helper class
// This class handles login and order creation via API
const { APIUtils } = require('../utils/APIUtils');


// ---------------- TEST DATA ----------------

// Login payload used for authentication API
const loginPayload = {
    userEmail: "rohit.lavate287@gmail.com",
    userPassword: "Admin@123"
};


// Order creation payload used to create order via backend API
const orderPayload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6960eac0c941646b7a8b3e68"
        }
    ]
};


// Fake response payload that will replace actual API response
// Used to simulate "No Orders" scenario in UI
const fakeOrdersPayload = {
    data: [],
    message: "No Orders"
};


// Variable to store response returned from APIUtils
// It will contain authentication token and order information
let responseData;



// ---------------- GLOBAL SETUP ----------------

// beforeAll runs once before executing tests
test.beforeAll(async () => {

    // Create Playwright API request context
    // This allows us to perform backend API calls
    const apiContext = await request.newContext();

    // Create instance of API utility helper class
    const apiUtils = new APIUtils(apiContext, loginPayload);

    // Login via API and create order
    // createOrder() internally performs:
    // 1. Login API call
    // 2. Extract token
    // 3. Create order API call
    responseData = await apiUtils.createOrder(orderPayload);

});



// ---------------- TEST CASE ----------------

test("@Network Place Order with Mocked Orders API", async ({ page }) => {

    // Inject authentication token into browser localStorage
    // This bypasses UI login and authenticates user instantly
    await page.addInitScript(token => {

        // Store authentication token inside browser localStorage
        window.localStorage.setItem('token', token);

    }, responseData.token);



    // Intercept network request for "Get Orders" API
    // This allows us to modify or mock API response
    await page.route(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",

        async route => {

            // Fetch actual response from server
            // This converts browser request into API request
            const response = await page.request.fetch(route.request());

            // Override the response with fake data
            await route.fulfill({

                // Keep original response metadata
                response,

                // Force response status
                status: 200,

                // Specify response content type
                contentType: "application/json",

                // Replace actual API response body
                body: JSON.stringify(fakeOrdersPayload)

            });

        }
    );



    // Navigate to application
    await page.goto("https://rahulshettyacademy.com/client");



    // Click "My Orders" button to trigger Orders API call
    await page.locator("button[routerlink*='myorders']").click();



    // Wait for orders API response to be completed
    await page.waitForResponse(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"
    );



    // Capture message displayed on UI
    const message = await page.locator(".mt-4").textContent();

    // Print UI message in console
    console.log("Orders Message:", message);



    // Assertion to verify UI displays correct message
    await expect(page.locator(".mt-4")).toContainText("No Orders");

});