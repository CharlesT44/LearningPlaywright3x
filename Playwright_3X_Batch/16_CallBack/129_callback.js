function test(test, callmewhendone){
    console.log("Hi Start the test case");
    callmewhendone();
} test("Verify the login page is working fine", async(page) =>{
    console.log("Test case is done, now close the browser");
})