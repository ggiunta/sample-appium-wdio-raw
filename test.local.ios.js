const { remote } = require('webdriverio');
const { join } = require('path');

(async () => {
    const browser = await remote({
        logLevel: 'trace',

        capabilities: {
            testobject_api_key: '5AEEB8BF45C04B30AFEB9D6F4C980162',
            platformName: 'iOS',
            deviceName: 'iPhone 8',
            platformVersion: '12.4.1',
            app: join(process.cwd(), './apps/Timely.iOS.ipa'),
            udid : 'auto',
            xcodeOrgId: 'UY7WNAZ734',
            xcodeSigningId: 'iPhone Developer',
            automationName: 'XCUITest',
            noReset: false
        }
    })

    const userInput = await browser.$('~userNameInput')
    await userInput.setValue('ggiunta')

    const pwdInput = await browser.$('~passwordInput')
    await pwdInput.setValue('1111')

    await browser.deleteSession()
})().catch((e) => console.error(e))