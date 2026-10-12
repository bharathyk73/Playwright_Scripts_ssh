const {test,expect} =require("@playwright/test")

test("Verify Application title", async function({page}){
    await page.goto("http://google.com")
    const url=await page.url()
    console.log("Titel is",url)
    const title=await page.title()
    console.log("title is", title)
    await expect(page).toHaveTitle("google")})