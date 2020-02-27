var LogbookPage = function(browser) {
    this.browser = browser;

    const moreButtonSelector = '~moreButton'

    this.waitUntilDisplayed = function () {
        browser.$(moreButtonSelector).waitForDisplayed()
    };
};

module.exports = LogbookPage;