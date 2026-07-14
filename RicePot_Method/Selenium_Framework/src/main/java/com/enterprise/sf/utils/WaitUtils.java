package com.enterprise.sf.utils;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitUtils {

    private static final int DEFAULT_TIMEOUT = 20;

    public static WebElement waitForElementVisible(WebDriver driver, By locator, int timeoutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
            return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
        } catch (TimeoutException e) {
            throw new RuntimeException("Element not visible after " + timeoutInSeconds
                    + " seconds: " + locator.toString(), e);
        }
    }

    public static WebElement waitForElementClickable(WebDriver driver, By locator, int timeoutInSeconds) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
            return wait.until(ExpectedConditions.elementToBeClickable(locator));
        } catch (TimeoutException e) {
            throw new RuntimeException("Element not clickable after " + timeoutInSeconds
                    + " seconds: " + locator.toString(), e);
        }
    }

    public static WebElement waitForElementVisible(WebDriver driver, By locator) {
        return waitForElementVisible(driver, locator, DEFAULT_TIMEOUT);
    }

    public static WebElement waitForElementClickable(WebDriver driver, By locator) {
        return waitForElementClickable(driver, locator, DEFAULT_TIMEOUT);
    }
}
