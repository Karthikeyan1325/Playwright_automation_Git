const{test,expect} = require('@playwright/test')

// test('test1',async({page})=>{


//     console.log("this is my test1")

// })

// test('test2',async({page, browserName})=>{

//     if(browserName === 'chromium') {

//         test.skip()

//     }

//     console.log("this is my test2")

// })

// test('test3',async({page})=>{

//     test.fixme()
//     console.log

// })

// test('test4',async({page})=>{
//     console.log("this is my test4")
//     test.fail()


//     expect(1).toBe(2)
// })

// test('test5',async({page,browserName})=>{

// if(browserName === 'firefox') {

//     test.fail()

// }
// })

test('test6',async({page})=>{

    //test.slow()
    test.setTimeout(10000)
    console.log("this is my test6")
    await page.goto('https://www.demoblaze.com/index.html')



})