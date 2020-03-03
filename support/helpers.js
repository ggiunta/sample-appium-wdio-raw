var Helpers = function(browser) {
    this.browser = browser;

    this.waitForAlertDisplayed = function () {
        browser.waitUntil( function() {
            return browser.getAlertText()
        }, 30000)
    }

    this.waitAndAcceptLocationAlert = function () {
        if (browser.isAndroid) {
            this.waitForAlertDisplayed()
            browser.acceptAlert()
        } else {
            browser.$(this.getIOSNameSelector("Allow While Using App")).click()
        }
    }

    this.getIOSNameSelector = function (name) {
        return (`-ios predicate string:name CONTAINS '${name}'`)
    }

    this.getIOSValueSelector = function (value) {
        return (`-ios predicate string:value CONTAINS '${value}'`)
    }

    this.getAndroidTextSelector = function (text) {
        return (`android=new UiSelector().text("${text}")`)
    }
};

module.exports = Helpers;