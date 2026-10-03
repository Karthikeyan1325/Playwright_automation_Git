const {test,expect} = require('@playwright/test')


test ('All elements',async ({page})=>{

await page.goto('https://demoblaze.com/index.html')

const links = await page.$$("//div[@id='tbodyid']//div//h4")


for(const link of links){

   const linkTest =  await link.textContent()
   console.log(linkTest)


}

})