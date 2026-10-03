    const {test,expect} = require('@playwright/test')

    test('Handle checkbox',async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.locator("//input[@id = 'monday' and @type='checkbox']").check()
    // await page.check("//input[@id = 'monday' and @type='checkbox']")
    await expect(await page.locator("//input[@id = 'monday' and @type='checkbox']")).toBeChecked()
    await expect(await page.locator("//input[@id = 'monday' and @type='checkbox']").isChecked()).toBeTruthy()
    await expect(await page.locator("//input[@id = 'sunday' and @type='checkbox']").isChecked()).toBeFalsy()

    const checkBoxLocators = ["//input[@id = 'monday' and @type='checkbox']",
        "//input[@id = 'sunday' and @type='checkbox']",
        "//input[@id = 'friday' and @type='checkbox']"
    ]

    for(const locators of checkBoxLocators)
    {
        await page.locator(locators).check()

    }

        for(const locators of checkBoxLocators)

    {
        if(await page.locator(locators).isChecked())
        await page.locator(locators).uncheck()

    }
  
        await page.waitForTimeout(5000)
    })