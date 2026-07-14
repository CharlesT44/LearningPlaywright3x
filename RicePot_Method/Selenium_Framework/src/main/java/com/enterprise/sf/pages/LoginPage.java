package com.enterprise.sf.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.enterprise.sf.utils.WaitUtils;

public class LoginPage {

    @FindBy(xpath = "//input[@id='username']")
    private WebElement usernameField;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement passwordField;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMeCheckbox;

    @FindBy(xpath = "//div[@id='error']")
    private WebElement errorMessage;

    private final WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void enterUsername(String username) {
        try {
            WaitUtils.waitForElementVisible(driver, By.xpath("//input[@id='username']"));
            usernameField.clear();
            usernameField.sendKeys(username);
        } catch (Exception e) {
            throw new RuntimeException("Failed to enter username: " + e.getMessage(), e);
        }
    }

    public void enterPassword(String password) {
        try {
            WaitUtils.waitForElementVisible(driver, By.xpath("//input[@id='password']"));
            passwordField.clear();
            passwordField.sendKeys(password);
        } catch (Exception e) {
            throw new RuntimeException("Failed to enter password: " + e.getMessage(), e);
        }
    }

    public void clickLoginButton() {
        try {
            WaitUtils.waitForElementClickable(driver, By.xpath("//input[@id='Login']"));
            loginButton.click();
        } catch (Exception e) {
            throw new RuntimeException("Failed to click login button: " + e.getMessage(), e);
        }
    }

    public void doLogin(String username, String password) {
        enterUsername(username);
        enterPassword(password);
        clickLoginButton();
    }

    public String getErrorMessage() {
        try {
            WaitUtils.waitForElementVisible(driver, By.xpath("//div[@id='error']"));
            return errorMessage.getText();
        } catch (Exception e) {
            throw new RuntimeException("Failed to retrieve error message: " + e.getMessage(), e);
        }
    }

    public boolean isErrorMessageDisplayed() {
        try {
            WaitUtils.waitForElementVisible(driver, By.xpath("//div[@id='error']"));
            return errorMessage.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    public boolean isRememberMeSelected() {
        try {
            return rememberMeCheckbox.isSelected();
        } catch (Exception e) {
            throw new RuntimeException("Failed to check remember me state: " + e.getMessage(), e);
        }
    }

    public String getPageTitle() {
        try {
            return driver.getTitle();
        } catch (Exception e) {
            throw new RuntimeException("Failed to get page title: " + e.getMessage(), e);
        }
    }

    public String getCurrentUrl() {
        try {
            return driver.getCurrentUrl();
        } catch (Exception e) {
            throw new RuntimeException("Failed to get current URL: " + e.getMessage(), e);
        }
    }
}
