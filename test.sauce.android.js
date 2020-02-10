const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        protocol: 'https',
        hostname: 'appium.testobject.com',
        port: 443,

        capabilities: {
            testobject_api_key: 'A873222677F54380961A480809352558',
            platformName: 'Android',
        }
    })

    const userInput = await browser.$('~userNameInput')
    await userInput.setValue('ggiunta')

    const pwdInput = await browser.$('~passwordInput')
    await pwdInput.setValue('1111')

    await browser.deleteSession()
})().catch((e) => console.error(e))