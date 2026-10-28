import { Locator, Page, expect } from "@playwright/test";

export class AddEmpData{
    private empFTName:Locator;
    private empLTName:Locator;
    private empUniqueID:Locator;
    private empSave: Locator;
    private txtEmpHear:Locator;

    constructor(page:Page){
        this.txtEmpHear = page.getByRole('heading', { name: 'Add Employee' }).describe("Emp Header");
        this.empFTName = page.getByRole('textbox', { name: 'First Name' }).describe("Emp First Name");
        this.empLTName = page.getByRole('textbox', { name: 'Last Name' }).describe("Emp Last Name");
        this.empUniqueID = page.getByRole('textbox').nth(4)
        this.empSave = page.getByRole('button', { name: 'Save' }).describe("Emp Data is saved");
    }

    public async verifyEmpHeader(){
        await expect(this.txtEmpHear).toBeVisible();
        console.log(`${this.txtEmpHear} is validated`);
    }

    public async empFirstName(firstName:string){
        await this.empFTName.fill(firstName);
        console.log(`${this.empFTName.description()} is Entered`);
    }

    public async empLastName(lastName:string){
        await this.empLTName.fill(lastName);
        console.log(`${this.empLTName.description()} is Entered`);
    }

    public async empID(){
        const myuid = Date.now().toString();
        await this.empUniqueID.fill(myuid.substring(0, 8));
        console.log(`${myuid} is entered`)
    }
    
    public async myEmpSave(){
        await this.empSave.click();
        console.log(`${this.empSave.description()} is clicked`);

    }

}