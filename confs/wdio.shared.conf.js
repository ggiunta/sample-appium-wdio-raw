exports.config = {
    logLevel: 'trace',
    fullReset: true,
    specs: [
        './tests/**/*.js'
    ],
    mochaOpts: {
        timeout: 0
    }
};