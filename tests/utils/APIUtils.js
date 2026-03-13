class APIUtils {
    constructor(apiContext){
        this.apiContext = apiContext
    }
    async getToken(){
        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
            //also can add header
        });
        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token;
        console.log(token);
        return token;
    }
    async createOrder(orderPayload){
        let response ={};
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
        data: orderPayload,
        headers: {
           'Authorization': token,
           'Content-Type': 'application/json'
        }
    });
    const orderResponseJson = await orderResponse.json();
    orderId = orderResponseJson.orders[0];
    return orderId;
    }
}
module.exports = {APIUtils}