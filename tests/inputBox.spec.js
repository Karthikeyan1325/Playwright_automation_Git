const{test,expect}= require('@playwright/test')

test('handle inputbox',async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')


   //input box firstname field

   await expect.soft(await page.locator("//input[@id='name']")).toBeEnabled()
   await expect.soft(await page.locator("//input[@id='name']")).toBeVisible()
   await expect.soft(await page.locator("//input[@id='name']")).toBeEmpty()
   await expect.soft(await page.locator("//input[@id='name']")).toBeVisible()
   await page.fill("//input[@id='name']",'John')

   await page.waitForTimeout(5000)//pausing the code

    page.close()
})