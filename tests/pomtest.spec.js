const{test,expect} = require('@playwright/test')
import { LoginPage } from '../pages/loginpage'
import { HomePage } from '../pages/homepage'
import { CartPage } from '../pages/cartpage'

test('test',async({page})=>{

//login

const login = new LoginPage(page)
await login.goToLoginPage()

await login.login('pavanol','test@123')

await page.waitForTimeout(7000) 

//home page
const home = new HomePage(page)
await home.addProductToCart('Nexus 6')
await page.waitForTimeout(7000)
await home.goToCartPage()
await page.waitForTimeout(7000)

//cart page 
const cartPage = new CartPage(page)
await cartPage.cartadd('Nexus 6')
expect (await status).toBe(true)


})






