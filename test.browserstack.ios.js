const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        hostname: 'hub-cloud.browserstack.com',
        
        capabilities: {
            app: 'bs://9c90aa8a6bf1f0590bee96477d44390f7612ed27',
            device : 'iPhone 8 Plus',
            os_version : '11',
            'browserstack.user' : 'germangiunta1',
            'browserstack.key' : 'xxcNAYvybZxqqrpPwcgt',
            project: 'My First Project',
            build : 'My First Build',
            name: 'Bstack-[Node] Sample Test',
        }
    })

    const userInput = await browser.$('~userNameInput')
    await userInput.setValue('ggiunta')

    const pwdInput = await browser.$('~passwordInput')
    await pwdInput.setValue('1111')

    await browser.deleteSession()
})().catch((e) => console.error(e))