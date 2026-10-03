const {test,expect}= require('@playwright/test')

test ('assertion',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    const radio = await page.locator('#gender-male')

    await radio.click()
   await expect(radio).toBeChecked()

    const newsLetter = await page.locator('#NewsLetterSubscriptions_0__IsActive')
   await expect(newsLetter).toBeChecked()

   //toHaveAttribute

   const toCheckAttribute = await page.locator('#register-button')
   await expect(toCheckAttribute).toHaveAttribute('type','submit')

    //toHaveText

    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    //toContaintText
      await expect(await page.locator('.page-title h1')).toContainText('Reg')

    //toHaveValue

    const field = await page.locator('#Email')
    await field.fill('karthi@gmail.com')
    await expect(field).toHaveValue('karthi@gmail.com')

    //toHaveCount

    const options = await page.locator('selet[name="DateOfBirthMonth" option')

    await expect(options).toHaveCount(13)







   page.close()

 
})