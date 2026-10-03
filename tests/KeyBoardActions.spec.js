const{test,expect} = require('@playwright/test')

test('Keyboard actions',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    await page.type('[name="text1"]','Welcome to automation')

    //ctrl + A - select the text
    await page.keyboard.press('Control+A')

    //ctrl + c - copy the text
    await page.keyboard.press('Control+C')

    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //ctrl + v - paste the text
    await page.keyboard.press('Control+v')

    await page.waitForTimeout(5000)

    

})