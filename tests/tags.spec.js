const{test,expect} = require('@playwright/test')

test('test1@sanity',async({page})=>{

console.log("this my test1")


})

test('test2@sanity',async({page})=>{

console.log("this my test2")


})

test('test3@sanity',async({page})=>{

console.log("this my test3")


})

test('test4@regression',async({page})=>{

console.log("this my test4")


})

test('test5@regression@sanity',async({page})=>{

console.log("this my test5")


})
