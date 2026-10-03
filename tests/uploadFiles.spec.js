const{test,expect} = require('@playwright/test')

test('single File',async({page})=>{


})

test.only('Multiple File',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    // Use escaped backslashes for Windows paths or use forward slashes
    await page.locator('#filesToUpload').setInputFiles(["tests/uploadFiles/javascript_automation_interview_questions.pdf",
        "tests/uploadFiles/JavaScript_Playwright_Interview_Questions_With_Problems.pdf"])


    await page.waitForTimeout(3000)
    await page.locator('#filesToUpload').setInputFiles([])//will remove all the added files

    await page.waitForTimeout(3000)

})
