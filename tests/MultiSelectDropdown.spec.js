const{test,expect}=require('@playwright/test')

test('multi',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')


// //select multiple options from multi select dropdown
// await page.selectOption('#colors',['Red', 'Blue', 'Yellow'])

//Assertion
//1)Check number of options in dropdown
// const countCheck = await page.locator('#colors option')
// await expect(countCheck).toHaveCount(7)

// ////2)check number of options in dropdown using array
// const options = await page.$$('#colors option')
// await expect(options.length).toBe(7)

//3)check the presence of value in dropdown
const check = await page.locator('#colors').textContent()
await expect((check).includes('Red')).toBeTruthy()



await page.waitForTimeout(5000)
})