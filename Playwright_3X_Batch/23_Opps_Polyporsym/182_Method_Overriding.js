class BaseTest{
    setup() {
        console.log("Base: open browser ");
    }
}

class ApiTest extends BaseTest {
    setup() {
        console.log("API Test: open browser");

    }
}
 let test = new ApiTest();
 let btest = new BaseTest();
 test.setup();
 btest.setup()