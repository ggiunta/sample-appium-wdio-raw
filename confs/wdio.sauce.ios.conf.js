const { config } = require('./wdio.shared.conf');

config.protocol = 'https',
config.hostname = 'appium.testobject.com',
config.port = 443,

config.capabilities = [
    {
        testobject_api_key: '5AEEB8BF45C04B30AFEB9D6F4C980162',
        platformName: 'IOS',
    },
];

exports.config = config;