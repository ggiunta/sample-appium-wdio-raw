const { join } = require('path');

exports.config = {
    logLevel: 'trace',
    specs: [
        './tests/**/*.js'
    ],

    capabilities: [{
        platformName: 'Android',
        deviceName: 'Nexus 5X API 29 x86',
        app: join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk')
    }]
}