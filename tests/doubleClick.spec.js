const{test,expect} = require('@playwright/test')

test('doubleclicik',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const buttonToClick = await page.locator("//button[normalize-space()='Copy Text']")

await buttonToClick.dblclick()

const field2= await page.locator("//input[@id='field2']")

await expect(field2).toHaveValue('Hello World!')

await page.waitForTimeout(3000)



})