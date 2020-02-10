const { remote } = require('webdriverio');
const { join } = require('path');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        //protocol: 'https',
        //hostname: 'us1-manual.app.testobject.com',
        //port: '',
        capabilities: {
            //testobject_api_key: 'A873222677F54380961A480809352558',
            platformName: 'Android',
            platformVersion: '7.1.1',
            deviceName: 'Nexus 5X API 29 x86',
            app: join(process.cwd(), './apps/com.eroad.timely-Signed.apk')
        }
    })

    const userInput = await browser.$('~userNameInput')
    await userInput.setValue('ggiunta')

    const pwdInput = await browser.$('~passwordInput')
    await pwdInput.setValue('1111')

    await browser.debug()

    await browser.deleteSession()
})().catch((e) => console.error(e))