exports.config = {
    logLevel: 'trace',
    protocol: 'https',
    hostname: 'api.kobiton.com',
    user: 'german.giunta',
    key: '98b41f1a-de50-4048-a4ec-48e0385a8908',
    port: 443,
    connectionRetryTimeout: 20 * 60000, // 20 mins,
    specs: [
        './tests/**/*.js'
    ],

    capabilities: [{
        // The generated session will be visible to you only. 
        sessionName:        'Automation test session',
        sessionDescription: '',
        deviceOrientation:  'portrait',
        captureScreenshots: true,
        // The maximum size of application is 500MB
        // By default, HTTP requests from testing library are expired
        // in 2 minutes while the app copying and installation may
        // take up-to 30 minutes. Therefore, you need to extend the HTTP
        // request timeout duration in your testing library so that
        // it doesn't interrupt while the device is being initialized.
        app:                'kobiton-store:50960',
        deviceGroup:        'KOBITON',
        // For deviceName, platformVersion Kobiton supports wildcard
        // character *, with 3 formats: *text, text* and *text*
        // If there is no *, Kobiton will match the exact text provided
        deviceName:         'Galaxy Note5',
        platformVersion:    '7.0',
        platformName:       'Android'
    }]
}