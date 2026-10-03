const{test,expect} = require('@playwright/test')

test('dropdown',async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/')

//multiple ways to selection option from dropdown
//await page.locator('#country').selectOption({label:'India'}) //label/visible text
//await page.locator('#country').selectOption('India') //visible text
//await page.locator('#country').selectOption({value:'India'}) //by using value
//await  page.locator('#county').selectOption({index : 1})//by using index
//await page.selectOption("#country","India")//by text

//assertion
// //1)check number of options in dropdown - Approach 1
// const optionsCount = await page.locator('#country option')
// await expect(optionsCount).toHaveCount(10)

// //2)check number of options in dropdown - Approach 2
// const optionsCount = await page.$$('#country option')
// await expect(optionsCount.length).toBe(10)

// //3)check the presence of option in dropdown - Approach 1
// const content = await page.locator('#country option').textContent()
// await expect(content.includes('India')).toBeTruthy( )

// //4)check presence of value in the dropdown - Approach 2 - using looping
// const options = await page.$$('#country option')
// let status = false

// for(const option of options)
// {
// let value = await option.textContent()
// if(value.includes('France'))
// {status = true
// break}
// }
// expect(status).toBeTruthy()

//select option from dropdown using loop
const options = await page.$$('#country option')
for(const option of options)
{
let value = await option.textContent()
if(value.includes('India'))
{
await page.selectOption("#country",value)
break
}

}

await page.waitForTimeout(5000)
await page.close()


})