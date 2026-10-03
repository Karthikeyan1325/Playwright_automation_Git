const{test,expect}= require('@playwright/test')

test('handle inputbox',async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')


   //radio button
   await page.locator("//input[@id='male']").click()
   //await page.check("//input[@id='male']")
   await expect(await page.locator("//input[@id='male']")).toBeChecked()
   await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy()

   await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy()

   await page.waitForTimeout(5000)//pausing the code

    page.close()
})