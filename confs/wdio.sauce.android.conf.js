const { config } = require('./wdio.shared.conf');

config.protocol = 'https',
config.hostname = 'appium.testobject.com',
config.port = 443,

config.capabilities = [
    {
        testobject_api_key: 'A873222677F54380961A480809352558',
        platformName: 'Android',
    },
];

exports.config = config;