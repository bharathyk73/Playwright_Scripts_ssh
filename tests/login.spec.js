const{test,expect}=require('@playwright/test')

test.use({viewport:{width:1280,height:629}})

test('Valid Login ',async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 // ***maximize window***/
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height) 
    console.timeLog(await page.viewportSize().height)
//***Screenshot*/
    await page.screenshot({path:'screenshotplaywright.png',fullPage:true}) 
//***Login */
    await page.getByPlaceholder("Username").type("Admin")
    await page.locator("//input[@name='password']").type("admin123")
//***Screenshot */    
    await page.screenshot({path:'screenshotplaywright.png',fullPage:true}) 
//***Submit */    
    await page.locator("//button[@type='submit']").click()
//***Logout */    
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()
//***Assert and Verify */    
    await expect(page).toHaveURL(/login/)
//***Retry logic =2 in config file or --retries=2 from command prompt, then we will see flaky test tab in report*/

})