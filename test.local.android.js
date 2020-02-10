const { remote } = require('webdriverio');
const { join } = require('path');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        
        capabilities: {
            platformName: 'Android',
            deviceName: 'Nexus 5X API 29 x86',
            app: join(process.cwd(), './apps/com.eroad.timely-Signed.apk')
        }
    })

    const userInput = await browser.$('~userNameInput')
    await userInput.setValue('ggiunta')

    const pwdInput = await browser.$('~passwordInput')
    await pwdInput.setValue('1111')

    await browser.deleteSession()
})().catch((e) => console.error(e))