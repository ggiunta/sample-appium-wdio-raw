const { config } = require('./wdio.shared.conf');
const { join } = require('path');

config.capabilities = [
    {
        platformName: 'Android',
        deviceName: 'Nexus 5X API 29 x86',
        app: join(process.cwd(), './apps/com.eroad.timely-Signed.apk')
    },
];

exports.config = config;