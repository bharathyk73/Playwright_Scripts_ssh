const{test,expect} =require('@playwright/test')

test("Mousehover test", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
})