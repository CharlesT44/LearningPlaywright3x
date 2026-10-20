class BasePage {
    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log(`${this.pageName} is open successfully`);
    }

    close() {
        console.log(`${this.pageName} is close now`);
    }
}

class LoginPage extends BasePage {
}

let page = new LoginPage("Login Page");
page.open();
page.close();