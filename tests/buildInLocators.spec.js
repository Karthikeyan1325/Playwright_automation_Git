 const {test,expect} = require('@playwright/test')

test ('buildin',async({page})=>{


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

const pageLogo = await page.getByAltText('company-branding')
console.log(pageLogo)
await expect(pageLogo).toBeVisible()

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')

await page.getByRole('button',{type: 'submit'}).click()

await expect(await page.getByText('manda user')).toBeVisible()

const allTitle = await page.title()
console.log(allTitle)

page.close()

})