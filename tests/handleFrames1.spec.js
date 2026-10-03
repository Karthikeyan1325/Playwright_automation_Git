const{test,expect}=require('@playwright/test')

test('frames',async({page})=>{


    await page.goto('https://www.selenium.dev/selenium/web/iframes.html?utm_source=chatgpt.com')

    //total frames

    const allFrames = await page.frames()
    console.log('Total frames: ' + allFrames.length)

    const frame = page.frame({url:'https://www.selenium.dev/selenium/web/formPage.html'})
    const result = frame.fill('#email','John')
   

    await expect(frame.locator('#email')).toHaveValue('John')


    await page.waitForTimeout(3000)


}) 
