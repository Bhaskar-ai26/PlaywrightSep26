import { Locator, Page, expect } from "@playwright/test";

export class Mypimlink{
    private txtpimlink:Locator;
    private txtcheck:Locator;
    private linkAddEmp:Locator;

    constructor(page:Page){
        this.txtpimlink = page.getByRole('link', { name: 'PIM' }).describe("PIMlink clicked");
        this.txtcheck = page.getByRole('heading', { name: 'Employee Information' }).describe("Employee Information");
        this.linkAddEmp = page.locator("div.orangehrm-header-container button").describe("Add Employee");
    }

    public async pimLinkClick(){
        await this.txtpimlink.click();
        console.log(`${this.txtpimlink} is clicked`)
    }
    public async checkPIMHeader(){
        await expect(this.txtcheck).toBeVisible();
        console.log(`${this.txtcheck.description()} is PIM header`);
    }

    public async addEmpClick(){
       await this.linkAddEmp.click();
        console.log(`${this.linkAddEmp.description()} is clicked`)
    }

}