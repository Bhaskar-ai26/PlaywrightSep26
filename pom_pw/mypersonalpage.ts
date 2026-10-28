import { Locator, Page, expect } from "@playwright/test";   
export class MyPersonalPage{
    private personalDetailsHeader: Locator;

    constructor(page: Page){
        this.personalDetailsHeader = page.getByRole('heading', { name: 'Personal Details' }).describe("Personal Details Header");
    }

    public async verifyPersonalDetailsHeader(){
        await expect(this.personalDetailsHeader).toBeVisible();
        console.log(`${this.personalDetailsHeader.description()} is validated`);
    }
}
