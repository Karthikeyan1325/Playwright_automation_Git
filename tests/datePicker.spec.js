const{test,expect} = require('@playwright/test')

test('date picker',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

    // //handling date with fill
    // await page.fill('#datepicker','11/13/1998')

    const month = 'July'
    const Year = '2025'
    const date = '2'

    await page.click('#datepicker') //opens calendar

    while(true){


        const selectMonth = await page.locator('.ui-datepicker-month').textContent()
        const selectYear = await page.locator('.ui-datepicker-year').textContent()

        if(month==selectMonth & Year==selectYear)

            {
                break
            }

            page.click("a[title='Prev']")
    }


    const dates = await page.$$("//a[@class='ui-state-default']")


    for(const dt of dates)

        {

            if(await dt.textContent()==date)
            {

                await dt.click()
            }


        }
    await page.waitForTimeout(3000)



})