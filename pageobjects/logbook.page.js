var LogbookPage = function(browser) {
    this.browser = browser;

    const moreButtonSelector = '~moreButton'

    this.waitUntilDisplayed = function () {
        browser.$(moreButtonSelector).waitForDisplayed()
    };

    this.waitUntilStateIsDisplayed = function (state) {
        //Use this when bug on app not displaying accesibility ID is fixed
        //browser.$(`//*[@text='${state}' and @content-desc='stateLabel']`).waitForDisplayed(30000)

        if (browser.isAndroid) {
            browser.$(`//*[@text='${state}' and @class='android.widget.TextView']`).waitForDisplayed(30000)
        } else {
            browser.$(`//*[@value='${state}' and @type='XCUIElementTypeStaticText']`).waitForDisplayed(30000)
        }
    }

    this.transitionToState = function (state) {
        var helpers = new (require('../support/helpers'))(browser)

        if (browser.isAndroid) {
            browser.$(helpers.getAndroidTextSelector(state)).click()
        } else {
            browser.$(`//*[@label='${state}' and @type='XCUIElementTypeButton']`).click()
        }
    }
};

module.exports = LogbookPage;