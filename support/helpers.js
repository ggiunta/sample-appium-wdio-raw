var Helpers = function(browser) {
    this.browser = browser;

    this.wairForAlertDisplayed = function () {
        browser.waitUntil( function() {
            return browser.getAlertText()
        }, 30000)
    }

    this.getIOSNameSelector = function (name) {
        return (`-ios predicate string:name CONTAINS '${name}'`)
    }

    this.getAndroidTextSelector = function (text) {
        return (`android=new UiSelector().text("${text}")`)
    }
};

module.exports = Helpers;