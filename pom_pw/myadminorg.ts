import {test,expect, Page, Locator} from '@playwright/test'

export class MyAdminOrg{
    private adminLink: Locator;
    private adminOrg: Locator;
    private generalInfo: Locator;
    private editLink:Locator;   
    private cityText: Locator;
    private notesText:Locator; 
    private adminHeader: Locator;
    private GenralInfoHeader: Locator;
    private saveButton:Locator;
    private countryList: Locator;
    private countryselect:Locator;
    private page:Page;

    constructor(page:Page){
        this.page = page;
       this.adminLink = page.getByRole('link', { name: 'Admin' }).describe("Admin Link Clicked");
       this.adminOrg = page.getByText('Organization').describe("Organization is clicked");
       this.generalInfo =  page.getByRole('menuitem', { name: 'General Information' }).describe("General Informatin is clicked");
       this.adminHeader = page.getByText("AdminUser Management").describe("Admin Header");
       this.GenralInfoHeader = page.getByText("General Information").describe("General Info Header");

       this.editLink = page.locator('.oxd-switch-input').describe("Edit is clickced");      
      
        this.cityText = page.locator("//label[contains(text(), 'City')]/following::input[1]").describe("City name is provided");      
       
       // Alternative Option 2: Using XPath with following sibling
       this.notesText = page.locator("//label[contains(text(), 'Notes')]/following::textarea[1]").describe("Notes provided");
       
       // this.notesText = page.locator("textarea[name='notes']").describe("Notes provided");

    this.countryList = page.locator("div.oxd-select-wrapper i").describe("country dropdown is selected");
     this.countryselect = page.getByRole('option', { name: 'Algeria' }).describe("country is selected");
       this.saveButton = page.getByRole('button', { name: 'Save' }).describe("Save Button is clicked");

    }

    public async adminLinkClk(){
        await this.adminLink.click();
        console.log(`${this.adminLink.description()}`)
    }

    public async verifyAdminHeader(){
        await expect(this.adminHeader).toBeVisible();
        console.log(`${this.adminHeader.description()} and displayed`)
    }

    public async adminOrgClk(){
        await this.adminOrg.click();
        console.log(`${this.adminOrg.description()}`)
    }

    public async genralInfoClk(){
        await this.generalInfo.click();
        console.log(`${this.generalInfo.description()}`)
    }
    public async verifyGeneralInfoHeader(){
        await expect(this.GenralInfoHeader).toBeVisible();
        console.log(`${this.GenralInfoHeader.description()} and displayed`)
    }
    public async genInfoEdit(){
        await this.editLink.click();
        await this.page.waitForTimeout(3000);
        console.log(`${this.GenralInfoHeader.description()} and displayed`)
        
    }

    public async cityTextData(){
        await this.cityText.fill("Hyderabad");
        console.log(`${this.cityText.description()}`)
    }

    public async notesProvided(){
        await this.notesText.fill("New data is provided");
        console.log(`${this.notesText.description()}`)
    }

    public async contrySelected(){
        await this.countryList.click();
        await this.countryselect.click();
        console.log(`${this.countryselect.description()}`);
    }
    public async clickSave(){
        await this.saveButton.click();
        console.log(`${this.saveButton.description()} and displayed`)

    }

}