describe('EROAD Timely state transitions', function() {
    it('REST to ON DUTY', function() {
        var loginPage = new (require('../pageobjects/login.page'))(browser)
        var logbookPage = new (require('../pageobjects/logbook.page'))(browser)
        var updateDetailsPage = new (require('../pageobjects/update.details.page'))(browser)

        var helpers = new (require('../support/helpers'))(browser)
        var data = require('../data/data.json')

        //Dismiss initial alerts on Timely iOS
        if (browser.isIOS) {
            helpers.waitForAlertDisplayed()
            browser.dismissAlert()
            helpers.waitForAlertDisplayed()
            browser.dismissAlert()
        }

        loginPage.submitCredentials(data.validUser.user, data.validUser.password)

        helpers.waitAndAcceptLocationAlert()

        logbookPage.waitUntilStateIsDisplayed("REST")
        logbookPage.transitionToState("ON DUTY")

        updateDetailsPage.waitUntilDisplayed()

        //Wait until location is retrieved (temporal)
        browser.pause(10000)
        
        updateDetailsPage.save()

        logbookPage.waitUntilStateIsDisplayed("ON DUTY")
    });
});