const{test,expect} = require('@playwright/test')

test.beforeEach(async()=>{


    console.log('this will run before each test')
})


test.describe('Group1',()=>{

test('test1',async({page})=>{

console.log('this is test 1')

})


test('test2',async({page})=>{

console.log('this is test 2')

})

})

test.describe('Group2',()=>{
test('test3',async({page})=>{

console.log('this is test 3')

})


test('test4',async({page})=>{

console.log('this is test 4')


})

})