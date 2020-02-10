const { remote } = require('webdriverio');
const { join } = require('path');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        protocol: 'https',
        hostname: 'appium.testobject.com',
        port: 443,
        //user: 'german_giunta2',
        //key: 'da35367c-ca93-482e-8395-c4096b807d14',
        capabilities: {
            testobject_api_key: '5AEEB8BF45C04B30AFEB9D6F4C980162',
            platformName: 'IOS',
            //platformVersion: '9',
            //deviceName: 'Nexus 5X API 29 x86',
            //app: join(process.cwd(), './apps/com.eroad.timely-Signed.apk')
        }
    })

    const userInput = await browser.$('~userNameInput')
    await userInput.setValue('ggiunta')

    const pwdInput = await browser.$('~passwordInput')
    await pwdInput.setValue('1111')

    //await browser.debug()

    await browser.deleteSession()
})().catch((e) => console.error(e))