const { config } = require('./wdio.shared.conf');
const { join } = require('path');

config.capabilities = [
    {
        platformName: 'iOS',
        deviceName: 'iPhone 8',
        platformVersion: '12.4.1',
        app: join(process.cwd(), './apps/Timely.iOS.ipa'),
        udid : 'auto',
        xcodeOrgId: 'UY7WNAZ734',
        xcodeSigningId: 'iPhone Developer',
        automationName: 'XCUITest',
    },
];

exports.config = config;