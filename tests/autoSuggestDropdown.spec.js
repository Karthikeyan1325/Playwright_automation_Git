const {test,expect}= require('@playwright/test')

test('bootStrap',async({page})=>{

    await page.goto('https://www.redbus.in/')

    await page.locator('#srcinput').fill('Delhi')

    await page.waitForSelector("(//div[@role='option'])")

    const fromCityOptions = await page.$$("(//div[@role='option'])")

    for(let city of fromCityOptions)
    {

        const value = await city.textContent()
        console.log(value)

        if (value.includes('Delhi'))

            {
                await city.click()
                break
            }

    }

    await page.waitForTimeout(5000)



})