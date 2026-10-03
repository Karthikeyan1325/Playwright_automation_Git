const{test,expect} = require('@playwright/test')

test('page screenshot',async({page})=>{

    await page.goto('https://www.opencart.com/index.php?route=cms/demo')

    await page.screenshot({path:'tests/screenshot/'+Date.now()+'homepage.png'})

})

test('full page screenshot',async({page})=>{

        await page.goto('https://www.opencart.com/index.php?route=cms/demo')

    await page.screenshot({path:'tests/screenshot/'+Date.now()+'homepage.png',fullPage:true})
    
})

test('Element screenshot',async({page})=>{

       await page.goto('https://www.opencart.com/index.php?route=cms/demo')

    await page.locator("img[src='application/view/image/demonstration/store-front.png']").screenshot({path:'tests/screenshot/'+Date.now()+'homepage.png'})

    
})