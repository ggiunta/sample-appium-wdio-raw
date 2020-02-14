var LoginPage = function(browser) {
    this.browser = browser

    const userInputSelector = '~userNameInput'
    const pwdInputSelector = '~passwordInput'

    this.submitCredentials = function (user, password) {
        var helpers = new (require('../support/helpers'))(browser);

        browser.$(userInputSelector).waitForDisplayed()
        browser.$(userInputSelector).setValue(user)

        browser.$(pwdInputSelector).waitForDisplayed()
        browser.$(pwdInputSelector).setValue(password)

        if (browser.isIOS) {
            browser.hideKeyboard()
            browser.$('XCUIElementTypeTable').click()
        } else {
            browser.$(helpers.getAndroidTextSelector('Test')).click()
        }
        
        if (browser.isIOS) {
            browser.$(helpers.getIOSNameSelector('LOGIN')).click()
        } else {
            browser.$(helpers.getAndroidTextSelector('LOGIN')).click()
        }
    };
};

module.exports = LoginPage