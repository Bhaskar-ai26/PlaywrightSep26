import { Locator, Page, expect } from "@playwright/test";

export class Myadminpage{
    private adminLink:Locator;
    private txtVerify:Locator;
    private userHint :Locator;
    private userSearch:Locator;
    private btnSearch:Locator;

    constructor(page:Page){
        this.adminLink = page.getByRole('link', { name: 'Admin' }).describe("Admin link is clicked");
        //this.txtVerify = page.locator('div').filter({ hasText: /^AdminUser Management$/ }).describe("Admin Title is verified");
        this.txtVerify = page.getByText("AdminUser Management").describe("Admin Title is verified");
        this.userHint =  page.locator("div.oxd-autocomplete-wrapper input").describe("HINT is entered");
        this.userSearch = page.locator("div.oxd-autocomplete-option").first().describe("selected User from the Option");
        this.btnSearch = page.getByRole('button', { name: 'Search' }).describe("Clicked on button Search");
      
    }

    public async verifyAdminpage(){
        await expect(this.txtVerify).toBeVisible();
        console.log(`${this.txtVerify.description()}`)
        
    }

    public async searchUser(user:string){
   
        await this.userHint.fill(user,{timeout:5000} );
        console.log(`${this.userHint.description()}`)
        await this.userSearch.click();
        console.log(`${this.userSearch.description()}`)
        await this.btnSearch.click();
        console.log(`${this.btnSearch.description()}`)
        console.log(`Search completed for user: ${user}`)

    }

}