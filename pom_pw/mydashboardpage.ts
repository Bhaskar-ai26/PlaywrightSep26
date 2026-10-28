import { Locator, Page, expect } from "@playwright/test";

export class MyDashboard{
    private hasDashboard:Locator;
    private PIMLink : Locator;
    private AdminLink : Locator;

    constructor (page: Page){
        this.AdminLink = page.getByRole('link', { name: 'Admin' }).describe("Admin link clicked")
        this.PIMLink = page.getByRole('link', { name: 'PIM' }).describe("PIM link is clicked");
        this.hasDashboard = page.getByRole('heading', { name: 'Dashboard' }).describe('Dashboard Header');

    }

    public async dashboardCheck(){
        await expect(this.hasDashboard).toBeVisible();
        console.log("The Dashboard Header")

    }

    public async adminLink(){
        await this.PIMLink.click();
        console.log(`Clicked on ${this.AdminLink.description()}`);


    }

    public async pimLink(){
        await this.AdminLink.click();
        console.log(`Click on ${this.PIMLink.description()}`);

    }
}