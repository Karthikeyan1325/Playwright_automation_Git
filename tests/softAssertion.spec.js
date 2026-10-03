const{test,expect}= require('@playwright/test')


test('soft assertion',async({page})=>{

await page.goto('https://www.demoblaze.com/index.html')

// //hard assertion
// await expect(page).toHaveTitle('STORE123')
// await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
// await expect(await page.locator('.navbar-brand')).toBeVisible()


//hard assertion
await expect.soft(page).toHaveTitle('STORE123')
await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
await expect.soft(await page.locator('.navbar-brand')).toBeVisible()

await page.close()
})