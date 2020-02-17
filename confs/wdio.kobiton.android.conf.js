const { config } = require('./wdio.shared.conf');

config.protocol = 'https',
config.hostname = 'api.kobiton.com',
config.user = 'german.giunta',
config.key = '98b41f1a-de50-4048-a4ec-48e0385a8908',
config.port = 443,
config.connectionRetryTimeout = 20 * 60000, // 20 mins

config.capabilities = [
    {
        sessionName:        'Automation test session',
        sessionDescription: '',
        deviceOrientation:  'portrait',
        captureScreenshots: true,
        app:                'kobiton-store:50960',
        deviceGroup:        'KOBITON',
        deviceName:         'Galaxy Note5',
        platformVersion:    '7.0',
        platformName:       'Android'
    },
];

exports.config = config;