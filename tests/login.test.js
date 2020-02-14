describe('EROAD Timely Login', function() {
    it('Valid', function() {
        this.timeout(0);

        var loginPage = new (require('../pageobjects/login.page'))(browser);
        var logbookPage = new (require('../pageobjects/logbook.page'))(browser);

        var helpers = new (require('../support/helpers'))(browser);

        if (browser.isIOS) {
            helpers.wairForAlertDisplayed()
            browser.dismissAlert()
            helpers.wairForAlertDisplayed()
            browser.dismissAlert()
        }

        loginPage.submitCredentials('ggiunta', '1111');

        if (browser.isAndroid) {
            helpers.wairForAlertDisplayed()
            browser.dismissAlert()
        }

        logbookPage.waitUntilDisplayed();
    });
});