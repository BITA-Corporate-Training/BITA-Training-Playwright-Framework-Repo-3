import { Page } from "playwright";
import { parseEnv } from "util";

class BooleanPageExtension{

    page: Page
    constructor(page){
        this.page = page;
    }

    async IsTextboxByPlaceholderTextVisible(placeholderText){
        let isVisible = await this.page.getByPlaceholder(placeholderText).isVisible();
        return isVisible;

    }
    
    async IsTextboxByIdVisible(idValue){
        let isVisible = await this.page.locator(idValue).isVisible();
        return isVisible
    }
    async IsTextboxByXpathVisible(XpathValue){
        let isVisible = await this.page.locator(XpathValue).isVisible();
        return isVisible
    }
    async IsTextboxByClassVisible(classValue){
        let isVisible = await this.page.locator(classValue).isVisible();
        return isVisible
    }
    async IsTextboxByCssSelectorVisible(cssValue){
        let isVisible = await this.page.locator(cssValue).isVisible();
        return isVisible
    }

    
    
}