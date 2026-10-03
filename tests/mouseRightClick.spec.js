const{test,expect} = require('@playwright/test')

test('right click',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/context_menu?utm_source=chatgpt.com')
    
    const button = await page.locator('#hot-spot')

    await page.waitForTimeout(3000)

    await button.click({button : 'right'})

    await page.waitForTimeout(3000)
})