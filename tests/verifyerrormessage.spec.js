const{test,expect}=require('@playwright/test')

test('Verify error message', async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin")
    await page.locator("//input[@name='password']").type("admin12",{delay:200})
    await page.locator("//button[@type='submit']").click()
//***Sleep-Thread.sleep in selenium */    
    await page.waitForTimeout(5000);
//***Verify error message- invalid credentials*/    
    const errormessage =await page.locator("//p[contains(@class,'oxd-text oxd-text--p oxd-alert-content-text')]").textContent()
    console.log("Error message is",+errormessage )
    //expect(errormessage.includes("Invalid")).toBeTruthy()
    expect(errormessage=='Invalid credential').toBeTruthy()
})