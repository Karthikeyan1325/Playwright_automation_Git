const{test,expect}= require('@playwright/test')

test('hiddenDropdown',async({page})=>{



    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123')

    await page.getByRole('button', { name: 'Login' }).click()

    await page.getByText('PIM').click()

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options)

        {

           const title =  await option.textContent()

           console.log(title)

           if(title.includes('QA Engineer'))
           {

            await option.click()
            break
           }

        }
    await page.waitForTimeout(2000)

})