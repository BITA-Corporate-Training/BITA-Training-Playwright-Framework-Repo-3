import { Page } from "playwright";

class GetPageExtension{
    page: Page
    constructor(page){
        this.page = page;
    }

    async GetTextboxValueByPlaceholderText(placeholderText){
        let value = await this.page.getByPlaceholder(placeholderText).inputValue();
        return value;
    }

    async GetTextboxValueById(idValue){
        let value = await this.page.locator(idValue).inputValue();
        return value;
    }

    async GetTextboxValueByXpath(XpathValue){
        let value = await this.page.locator(XpathValue).inputValue();
        return value;
    }

    async GetTextboxValueByCssSelector(cssValue){
        let value = await this.page.locator(cssValue).inputValue();
        return value;
    }

    async GetTextboxValueByTestId(testId){
        let value = await this.page.getByTestId(testId).inputValue();
        return value;
    }

}