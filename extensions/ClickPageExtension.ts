import { Page } from "playwright";

export class ClickPageExtension{

    
    page: Page
    constructor(page){
        this.page = page;
    }

    async ClickButtonByName(buttonName){
        await this.page.getByRole('button', {name: buttonName}).click();
    }

     async ClickNthButtonByName(buttonName, position){
        await this.page.getByRole('button', {name: buttonName}).nth(position).click();
    }

    async ClickButtonByTestId(testId){
        await this.page.getByTestId(testId).click();
    }

    async ClickButtonByLocator(locator){
        await this.page.locator(locator).click();
    }

    async ClickButtonByTitle(title){
        await this.page.getByTitle(title).click();
    }

    




    

    


}