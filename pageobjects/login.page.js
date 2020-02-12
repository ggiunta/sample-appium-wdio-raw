var LoginPage = function(browser) {
    this.browser = browser;

    const userInputSelector = '~userNameInput';
    const pwdInputSelector = '~passwordInput';

    this.submitCredentials = function (user, password) {
        browser.$(userInputSelector).waitForDisplayed();
        browser.$(userInputSelector).setValue(user);

        browser.$(pwdInputSelector).waitForDisplayed();
        browser.$(pwdInputSelector).setValue(password);

        if (browser.isIOS) {
            //IOS implementation
        } else {
            browser.$('android=new UiSelector().text("Test")').click();
        }
        
        if (browser.isIOS) {
            //IOS implementation
        } else {
            browser.$('android=new UiSelector().text("LOGIN")').click();
        }
    };
};

module.exports = LoginPage;