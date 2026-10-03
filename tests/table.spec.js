const{test,expect}= require('@playwright/test')


test('table',async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

   const table1 =  await page.locator('#productTable')


   const columns = await table1.locator('thead tr th')
   console.log(await columns.count())
   await expect(await columns.count()).toBe(4)


   const rows = table1.locator('tbody tr')
   console.log(await rows.count())
      await expect(await rows.count()).toBe(5)



    //   const matchedbox = rows.filter({

    //     has : page.locator('td'),
    //     hasText : 'Tablet' 

    //   })
    //   await matchedbox.locator('input').check()

     //select multiple products by re-usable function
      await selectProductName(rows,page,'Smartwatch')
      await selectProductName(rows,page,'Tablet')

       await page.waitForTimeout(5000)

})

   async function selectProductName(rows,page,name)

   {

    const matchedbox = rows.filter({

        has : page.locator('td'),
        hasText : name

      })
      await matchedbox.locator('input').check()


   }