package com.enterprise.sf.tests;

import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import com.enterprise.sf.base.BaseTest;
import com.enterprise.sf.pages.LoginPage;

public class LoginTest_Invalid extends BaseTest {

    @DataProvider(name = "invalidCredentials")
    public Object[][] getInvalidCredentials() {
        return new Object[][]{
            {"invalid@test.com", "validPassword123"},
            {"validuser@test.com", "WrongPass!456"},
            {"", ""},
            {"validuser@test.com", ""}
        };
    }

    @Test(dataProvider = "invalidCredentials")
    public void testInvalidLogin(String username, String password) {
        try {
            LoginPage loginPage = new LoginPage(driver);
            loginPage.doLogin(username, password);
            boolean errorDisplayed = loginPage.isErrorMessageDisplayed();
            Assert.assertTrue(errorDisplayed, "Error message should be displayed for invalid login");
            String errorText = loginPage.getErrorMessage();
            Assert.assertFalse(errorText.isEmpty(), "Error message should not be empty");
        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Invalid login test failed for user: '" + username + "': " + e.getMessage(), e);
        }
    }
}
