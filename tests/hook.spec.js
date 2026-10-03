const{test,expect} =  require('@playwright/test')

let page
test.beforeEach(async({browser})=>{

    page = await browser.newPage()
}
)
test.afterEach(async()=>{
}
)


test('login',async({page})=>{


})

test('logout',async({page})=>{


})