const { remote } = require('webdriverio');
const { join } = require('path');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        
        capabilities: {
            platformName: 'Android',
            deviceName: 'Nexus 5X API 29 x86',
            app: join(process.cwd(), './apps/Android-NativeDemoApp-0.2.1.apk')
        }
    })

    const loginButton = await browser.$('~Login')
    await loginButton.click()

    await browser.debug()

    await browser.deleteSession()
})().catch((e) => console.error(e))