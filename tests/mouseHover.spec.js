const{test,expect} = require('@playwright/test')

test('Mouse hover',async({page})=>{

await page.goto('https://www.opencart.com/index.php?route=cms/demo')

await page.getByRole('link', { name: 'Resources' }).click()

const hoverAction =   page.locator('a:has-text("OPENCART PARTNERS")')

await hoverAction.hover()


await page.waitForTimeout(3000)

})