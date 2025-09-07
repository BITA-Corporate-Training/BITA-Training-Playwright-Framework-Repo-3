import {SetPageExtension} from '../extensions/SetPageExtension.ts';
import {ClickPageExtension} from '../extensions/ClickPageExtension.ts';

import {LoginPageConstants} from '../constants/LoginPageConstants.ts';
import { ProductConstants } from '../constants/ProductConstants.ts';
import { GlobalConstants } from '../constants/GlobalConstants.ts';

import test, { expect, Page } from 'playwright/test';

let page: Page;
let setPageExtension;
let clickPageExtension; 

test.beforeEach('Setup Browser', async({browser})=>{

    page = await browser.newPage();

    setPageExtension = new SetPageExtension(page);
    clickPageExtension = new ClickPageExtension(page);

    
    await page.goto(process.env.url);

    //Enter User Name
    await setPageExtension.SetTextboxValueByPlaceholderText(LoginPageConstants.UsernameTextboxPlaceholderText, process.env.userid );

    //Enter Password
    await setPageExtension.SetTextboxValueByPlaceholderText(LoginPageConstants.PasswordTextboxPlaceholderText, process.env.password );

    //Env specific value
    console.log(process.env.envvalue);
    

    //Click Login Button
    await clickPageExtension.ClickButtonByLocator(LoginPageConstants.LoginButtonIdValue);

    
});

test('TC_01_Verify_Url', async()=>{

    let currentPageUrl =  page.url();

    expect(currentPageUrl).toBe(ProductConstants.ProductConstantsUrl);

    await page.waitForTimeout(3000);

})

test(`TC_02_Verify_Title`, async()=>{
    let title = await page.title();
    
    expect(title).toBe(GlobalConstants.SwagLabApplicationTitle);

    await page.waitForTimeout(3000);
    
})

test.afterEach('Close Browser', async()=>{
    await page.close();
})