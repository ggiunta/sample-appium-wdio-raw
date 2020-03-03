describe('EROAD Timely Login', function() {
    it('Valid', function() {
        var loginPage = new (require('../pageobjects/login.page'))(browser)
        var logbookPage = new (require('../pageobjects/logbook.page'))(browser)

        var helpers = new (require('../support/helpers'))(browser)
        var data = require('../data/data.json')

        if (browser.isIOS) {
            helpers.waitForAlertDisplayed()
            browser.dismissAlert()
            helpers.waitForAlertDisplayed()
            browser.dismissAlert()
        }

        loginPage.submitCredentials(data.validUser.user, data.validUser.password)

        helpers.waitForAlertDisplayed()
        browser.dismissAlert()

        logbookPage.waitUntilDisplayed()
    });
});