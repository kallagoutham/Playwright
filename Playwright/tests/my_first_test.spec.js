const {test,expect} = require('@playwright/test');

test('My First Test to visit Google.com',async({page})=>{
    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');
});