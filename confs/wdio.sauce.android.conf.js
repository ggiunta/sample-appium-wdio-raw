exports.config = {
    logLevel: 'trace',
    protocol: 'https',
    hostname: 'appium.testobject.com',
    port: 443,
    specs: [
        './tests/**/*.js'
    ],

    capabilities: [{
        testobject_api_key: 'A873222677F54380961A480809352558',
        platformName: 'Android',
    }]
}