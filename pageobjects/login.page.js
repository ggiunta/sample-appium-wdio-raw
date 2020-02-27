var LoginPage = function(browser) {
    this.browser = browser

    const userInputSelector = '~userNameInput'
    const pwdInputSelector = '~passwordInput'
    const loginButtonSelector = 'LOGIN'

    this.submitCredentials = function (user, password) {
        var helpers = new (require('../support/helpers'))(browser)

        browser.$(userInputSelector).waitForDisplayed()
        browser.$(userInputSelector).setValue(user)

        browser.$(pwdInputSelector).waitForDisplayed()
        browser.$(pwdInputSelector).setValue(password)

        if (browser.isIOS) {
            browser.hideKeyboard()
        }
        
        if (browser.isIOS) {
            browser.$(helpers.getIOSNameSelector(loginButtonSelector)).click()
        } else {
            browser.$(helpers.getAndroidTextSelector(loginButtonSelector)).click()
        }
    };
};

module.exports = LoginPage