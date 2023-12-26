import { test } from '@playwright/test';

//Annotations
//Annotations are keywords that contain some logical or conditional functionalities.
//Can be used with test blocks to control execution of tests as needed.
test.skip('My Skip Test Demo',async({page})=>{
    //This test gets skipped
});
test('Not ready yet',async({page})=>{
    page.goto('https://google.com');
    test.fail();
    //This will mark the test as failure if the tests gets passed
    //it will throw an error.
});
test.fixme('Test to be fixed',async({page})=>{
    //Test will be aborted.
});
test('Slow Test',async({page})=>{
    test.slow();
    //Marks the test as slow and triples the test timeout.
});
test.only("Only Test",async({page})=>{
    //Only this test will be run and multiple 
    //tests can be marked as only.
});
test('Skip Test',async({page,browserName})=>{
    //If the browser is firefox test will be skipped conditionally.
    test.skip(browserName==='firefox',"Still working on it");
});

//Tags
test('Test full report @smoke',async({page})=>{
    //npx playwright test --grep "@smoke" is used to run tagged testcases.
    //npx playwright test --grep-invert "@smoke" is used to skip the tagged testcases.

});