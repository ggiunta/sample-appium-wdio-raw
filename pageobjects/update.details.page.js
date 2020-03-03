var LogbookPage = function(browser) {
    this.browser = browser;

    var helpers = new (require('../support/helpers'))(browser)

    const androidSaveButtonSelector = `//*[@text='SAVE']`

    this.waitUntilDisplayed = function () {
        if (browser.isAndroid) {
            browser.$(androidSaveButtonSelector).waitForDisplayed()
        } else {
            browser.$(helpers.getIOSValueSelector('SAVE')).waitForDisplayed()
        }
    }

    this.save = function () {
        if (browser.isAndroid) {
            browser.$(androidSaveButtonSelector).click()
        } else {
            browser.$(helpers.getIOSValueSelector('SAVE')).click()
        }
    }
};

module.exports = LogbookPage;