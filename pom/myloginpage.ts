import { expect, Locator, Page } from '@playwright/test';

export class MyLoginPage {
    
    private txtUserName:Locator;
    private txtPassword: Locator;
    private btnLogin:Locator;
    private hdrLogin:Locator;

    constructor(page:Page){
        console.log("I am in constructor");
        this.txtUserName = page.getByRole('textbox', { name: 'Username' }).describe("User text box");
        this.txtPassword = page.getByRole('textbox', { name: 'Password' }).describe("password text box");
        this.btnLogin = page.getByRole('button', { name: 'Login' }).describe("Login button");
        this.hdrLogin = page.getByRole('heading', { name: 'Login' }).describe("Login Header");
    }

    public async enteruserName(userName:string){        
        await this.txtUserName.fill(userName);
        console.log(`${userName} is Entered on ${this.txtUserName}`);
    }

    public async enterPassword(password:string){
        await this.txtPassword.fill(password);
        console.log(`${password} is entered on ${this.txtPassword}`);
            
        }

    public async login(){
        await this.btnLogin.click();
        console.log("Login Button is Clicked")
    }

    public async getLoginHeaderText(){
        await expect(this.hdrLogin).toBeVisible();
    
    }

}
