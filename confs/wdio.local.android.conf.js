const { join } = require('path');

exports.config = {
    logLevel: 'trace',
    specs: [
        './tests/**/*.js'
    ],

    capabilities: [{
        platformName: 'Android',
        deviceName: 'Nexus 5X API 29 x86',
        app: join(process.cwd(), './apps/com.eroad.timely-Signed.apk')
    }]
}