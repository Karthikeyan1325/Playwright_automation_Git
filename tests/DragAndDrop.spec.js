const{test,expect} = require('@playwright/test')

test('drag and drop',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const source =await page.locator('#draggable')
    const destination = await page.locator('#droppable')

    //approach 1

    // await source.hover()
    // await page.mouse.down()

    // await destination.hover()
    // await page.mouse.up()

    //approach 2

    await source.dragTo(destination)

    await page.waitForTimeout(5000)

})