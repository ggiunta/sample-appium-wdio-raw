const { config } = require('./wdio.shared.conf');

config.hostname = 'hub-cloud.browserstack.com',

config.capabilities = [
    {
        app: 'bs://9c90aa8a6bf1f0590bee96477d44390f7612ed27',
        device : 'iPhone 8 Plus',
        os_version : '11',
        'browserstack.user' : 'germangiunta1',
        'browserstack.key' : 'xxcNAYvybZxqqrpPwcgt',
        project: 'My First Project',
        build : 'My First Build',
        name: 'Bstack-[Node] Sample Test',
    },
];

exports.config = config;