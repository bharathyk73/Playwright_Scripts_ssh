const{test,expect}=require('@playwright/test')

test('My first test', async function({page}){
    expect(12).toBe(12)
})

test.skip('My second test', async function({page}){
    expect(100).toBe(300)    
})

test('My third test', async function({page}){
    expect(2.0).toBe(2.0)   
})

test('My fourth test',async function({page}){
    expect("Bharathy Krishnamoorthy").toContain("Bharathy")
    expect(true).toBeTruthy()
})
test('My Fifth test',async function({page}){
    expect(false).toBeFalsy()
})
test('My sixth test',async function({page}){
    expect("Bharathy Krishnamoorthy".includes("Bharathy")).toBeTruthy()
})