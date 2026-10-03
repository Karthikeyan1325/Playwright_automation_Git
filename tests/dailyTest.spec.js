const{test,expect} = require('@playwright/test')

test.skip('alert',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

page.on('dialog',async dialog=>{

await expect(dialog.type()).toContain('alert')
await expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept()

})

await page.getByText('Simple Alert').click()

})

test('confirmation',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

 page.on('dialog',async dialog=>{

await expect(dialog.type()).toContain('confirm')
await expect(dialog.message()).toContain('Press a button!')
await dialog.accept()

})

await page.getByText('Confirmation Alert').click()


await expect(page.getByText('You pressed OK!')).toHaveText('You pressed OK!')

await page.waitForTimeout(2000)

})
