const {test,expect} = require('@playwright/test')

test('assertion',async({page})=>{

//open url
await page.goto('https://demoblaze.com/')

//to have url
await expect(page).toHaveURL('https://demoblaze.com/')

//to have title
const titleStore =  await page.title()
await console.log(titleStore)
await expect(page).toHaveTitle('STORE')

//to be visible
const logo =  page.getByRole('link', { name: 'PRODUCT STORE' })
await expect(logo).toBeVisible()

//to be enabled
const tobeenab = await page.locator("#loginusername")
await expect(tobeenab).toBeEnabled()

page.close()

})