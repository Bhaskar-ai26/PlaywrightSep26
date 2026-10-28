import { test,expect,Page } from '@playwright/test';

export class BasePage {
    protected page;

    constructor(page:Page) {
        this.page = page
    }

    public async navigateURL(url:string){
        await this.page.goto(url);
        console.log(`Navigated URL is ${url}`);

    }
}