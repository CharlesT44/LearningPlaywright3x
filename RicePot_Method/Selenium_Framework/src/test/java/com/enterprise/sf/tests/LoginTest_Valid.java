package com.enterprise.sf.tests;

import org.testng.Assert;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.enterprise.sf.base.BaseTest;
import com.enterprise.sf.pages.LoginPage;

public class LoginTest_Valid extends BaseTest {

    @Test
    @Parameters({"validUsername", "validPassword"})
    public void testValidLogin(String username, String password) {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String initialUrl = driver.getCurrentUrl();
            loginPage.doLogin(username, password);
            String currentUrl = driver.getCurrentUrl();
            Assert.assertFalse(currentUrl.equals(initialUrl),
                    "URL should change after successful login. Initial: " + initialUrl);
            Assert.assertTrue(currentUrl.contains("salesforce.com"),
                    "Post-login URL should be on salesforce.com domain. Current: " + currentUrl);
        } catch (AssertionError e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Valid login test failed: " + e.getMessage(), e);
        }
    }
}
