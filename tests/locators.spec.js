//const {test,expect} =require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{

    await page.goto("https://demoblaze.com/")

    //click on login button - property as location

    await page.click('id=login2')

    //provide username

   await page.fill('id=loginusername','pavanol')


   //provide password
   await page.type('id=loginpassword','test@123')

   //click on login button
   await page.click('//button[text()="Log in"]')

//verify logout link presence
   const logoutLink = await page.locator('id=logout2')

   await expect(logoutLink).toBeVisible()

   await page.close()


})