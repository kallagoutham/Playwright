import { expect, test } from '@playwright/test';

test('Assertions Demo', async({page})=>{
    await page.goto('https://kitchen.applitools.com/');
    // await page.pause()
    //ASSERTIONS
    //Check element present or not
    //The following statement wont work in the if block because it does not return but it checks.
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    // here the condition in the if block is known as element Handle returns true or false
    if(await page.$('text=The Kitchen')){   
        await page.getByRole('heading', { name: 'The Kitchen' }).click();
    }

    //check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    //Makes it a soft assertion by adding .soft after expect
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

    //check element is enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    //soft assertion as we know this fails any how.
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    //check text matches value or not.
    //we can Use Regular Expressions in the toHaveText() also.
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('Kalla Goutham');

    //An element has many attributes like type, class, value
    //checking the element attribute value.
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class','my-custom-html-class-name');
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass('my-custom-html-class-name');

    //visual validation with screenshot.
    await expect(page).toHaveScreenshot();

})