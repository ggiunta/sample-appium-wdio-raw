describe('EROAD Timely Login', function() {
    it('Valid', function() {
        this.timeout(0);

        var LoginPage = require('../pageobjects/login.page');
        var loginPage = new LoginPage(browser);
        var LogbookPage = require('../pageobjects/logbook.page');
        var logbookPage = new LogbookPage(browser);

        loginPage.submitCredentials('ggiunta', '1111');
        logbookPage.waitUntilDisplayed();
    });
});