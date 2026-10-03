const{test,expect}=require('@playwright/test')

test('frames',async({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames

    const allFrames = await page.frames()
    console.log('Total frames: ' + allFrames.length)

    //Frame objects
    //approach 1 : using name or url

    //const var = await page.frame('name') //if name is present
    const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/'})
    frame1.fill("[name='mytext1']",'hello')

    //aaproch 2: using frame locator
   const inputBox=  await page.frameLocator("iframe[name='iframe1.html']").locator("[name='mytext1']")

   inputBox.fill("Helloworld")

    await page.waitForTimeout(2000)


})
