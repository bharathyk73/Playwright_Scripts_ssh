const {test,expect} =require("@playwright/test")

test('Select values from dropdown',async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.waitForTimeout(2000);
    await page.locator("#state").selectOption({label:"Goa"})
    await page.waitForTimeout(2000);
    await page.locator("#state").selectOption({value:"Himachal Pradesh"})
    await page.waitForTimeout(2000);
    await page.locator("#state").selectOption({index:4})
    await page.waitForTimeout(2000);
    console.log("Test message")
   //const value=await page.locator("#state").textContent()
   //console.log("All dropdown values"+value)
   // const expectedvalue =await expect(value.includes("Tamil Nadu")).toBeTruthy()
    let state =await page.$("#state")
    let allelements=await state.$$("option")
    let ddstatus= false
    for(let i=0;i<allelements.length;i++)
    {
          let element =allelements[i]
          let value= await element.textContent()
          console.log("Value of dropdown using for loop"+value);      

    if(value.includes("Tamil Nadu"))
    {
        ddstatus=true
        console.log("Expected value found")
        break
        
    }
    
    }
    console.log("Test pass")
    await expect(ddstatus).toBeTruthy()
     
    await page.waitForTimeout(2000) 
    await page.locator("#hobbies").selectOption(['Playing','Reading'])
    await page.waitForTimeout(2000) 
    
})
