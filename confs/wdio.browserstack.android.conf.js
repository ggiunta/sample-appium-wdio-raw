exports.config = {
    logLevel: 'trace',
    hostname: 'hub-cloud.browserstack.com',
    specs: [
        './tests/**/*.js'
    ],

    capabilities: [{
        app: 'bs://2bd3414812f74bb0818af386505e788c65e1bc85',
        device : 'Samsung Galaxy S8',
        os_version : '7.0',
        'browserstack.user' : 'germangiunta1',
        'browserstack.key' : 'xxcNAYvybZxqqrpPwcgt',
        project: 'My First Project',
        build : 'My First Build',
        name: 'Bstack-[Node] Sample Test',
    }]
}