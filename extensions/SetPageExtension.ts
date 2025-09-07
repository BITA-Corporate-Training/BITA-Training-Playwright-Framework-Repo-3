import { Page } from "playwright";

export class SetPageExtension{

    
    page: Page
    constructor(page){
        this.page = page;
    }

    async SetTextboxValueByPlaceholderText(placeholderText, inputText){
        await this.page.getByPlaceholder(placeholderText).fill(inputText);
  
    }

    async SetTextboxValueById(idValue, inputText){
        await this.page.locator(idValue).fill(inputText);
    
    }
     async SetTextboxValueByXpath(XpathValue, inputText){
        await this.page.locator(XpathValue).fill(inputText);
    
    }
     async SetTextboxValueByClass(classValue, inputText){
        await this.page.locator(classValue).fill(inputText);
    
    }
     async SetTextboxValueByCssSelector(cssValue, inputText){
        await this.page.locator(cssValue).fill(inputText);
    
    }

    async SetTextboxValueByTestId(testId, inputText){
        await this.page.getByTestId(testId).fill(inputText);
    }


}