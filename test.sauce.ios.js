const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        protocol: 'https',
        hostname: 'appium.testobject.com',
        port: 443,

        capabilities: {
            testobject_api_key: '5AEEB8BF45C04B30AFEB9D6F4C980162',
            platformName: 'IOS',
        }
    })

    const userInput = await browser.$('~userNameInput')
    await userInput.setValue('ggiunta')

    const pwdInput = await browser.$('~passwordInput')
    await pwdInput.setValue('1111')

    await browser.deleteSession()
})().catch((e) => console.error(e))