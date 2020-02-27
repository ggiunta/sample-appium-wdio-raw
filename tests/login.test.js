describe('EROAD Timely Login', function() {
    it('Valid', function() {
        var loginPage = new (require('../pageobjects/login.page'))(browser)
        var logbookPage = new (require('../pageobjects/logbook.page'))(browser)

        var helpers = new (require('../support/helpers'))(browser)
        var data = require('../data/data.json')

        if (browser.isIOS) {
            helpers.wairForAlertDisplayed()
            browser.dismissAlert()
            helpers.wairForAlertDisplayed()
            browser.dismissAlert()
        }

        loginPage.submitCredentials(data.validUser.user, data.validUser.password)

        helpers.wairForAlertDisplayed()
        browser.dismissAlert()

        logbookPage.waitUntilDisplayed()
    });
});