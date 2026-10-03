const {test, expect} = require('@playwright/test')

test('Home Page', async ({page})=>{

await page.goto('https://demoblaze.com/')

const title = await page.title() // to get the title of the page
console.log("Page title is" + title)

await expect(page).toHaveTitle('STORE')

const pageUrl = page.url() //to get the url of the page 

console.log("Page url is " + pageUrl)    


await expect(page).toHaveURL('https://demoblaze.com/')

await page.close()

})