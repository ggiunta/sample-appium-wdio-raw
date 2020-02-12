exports.config = {
    logLevel: 'trace',
    protocol: 'https',
    hostname: 'appium.testobject.com',
    port: 443,
    specs: [
        './tests/**/*.js'
    ],

    capabilities: [{
        testobject_api_key: '5AEEB8BF45C04B30AFEB9D6F4C980162',
        platformName: 'IOS',
    }]
}