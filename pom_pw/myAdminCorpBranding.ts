import { test,expect, Page, Locator } from "@playwright/test";

export class AdminCorpBranding{ 
    private link_corp:Locator;
    private header_corpbranding: Locator;
    private primaryfontcolor:Locator;
    private primaryfontcolorchange:Locator;
    private secondarycolor:Locator;
    private secondarycolorchange:Locator;
    private clientlogo: Locator;
    private clientbanner:Locator;
    private loginbanner:Locator;
    private mediaimage:Locator;
    private previewbutton:Locator;
    private publishbutton:Locator;
    private logofailed:Locator;
    protected page:Page;

    constructor(page:Page){
        this.page = page;
        this.link_corp = page.getByRole('link', { name: 'Corporate Branding' }).describe("CorpBranding link clicked")
        this.header_corpbranding = page.getByRole('heading', { name: 'Corporate Branding' }).describe("Branding Header");
        this.primaryfontcolor = page.locator("//label[text()='Primary Font Color']/../..//div[@class='oxd-color-input-preview']").describe("PrimaryFont Color");
        this.primaryfontcolorchange = page.locator("//label[text()='Primary Font Color']/../..//div[@class='oxd-color-input-preview']/following::input[2]").describe("PrimaryFont Color change");
        this.secondarycolor = page.locator("//label[text()='Secondary Color']/../..//div[@class='oxd-color-input-preview']").describe("Seconday colrr");
        this.secondarycolorchange = page.locator("//label[text()='Secondary Color']/../..//div[@class='oxd-color-input-preview']/following::input[2]").describe("Seconday color change");
        this.clientlogo = page.locator("//label[text()='Client Logo']/../..//div[text()='Browse']").describe("Browse for CLient logo");
        this.clientbanner = page.locator("//label[text()='Client Banner']/../..//div[text()='Browse']").describe("Browse for CLient Banner");
        this.loginbanner = page.locator("//label[text()='Login Banner']/../..//div[text()='Browse']").describe("Browse for Login Banner");
        this.mediaimage = page.locator("//input[@type='checkbox']").describe("Socal media Image");
        this.previewbutton = page.getByRole('button', { name: 'Preview' }).describe("Preview button");
        this.publishbutton = page.getByRole('button', { name: 'Publish' }).describe("Publich button")
        this.logofailed = page.getByText('Incorrect Dimensions').describe("logo upload failed")
    }

    public async clickCorpBrand(){
        await this.link_corp.click();
        console.log(`${this.link_corp.description()}`);     
    }

    public async verifyCorpHeader(){
        await expect(this.header_corpbranding).toBeVisible();
        console.log(`${this.header_corpbranding} is displayed`);        
    }

    public async pickPrimaryFontColor(){
        await this.primaryfontcolor.click();
        console.log(`${this.primaryfontcolor.description()}`)
    }

    public async updatePrimayFontColor(){
        await this.primaryfontcolorchange.fill("#FF1FFF");
        console.log(`${this.primaryfontcolorchange.description()}`)
    }
     public async pickSecondayColor(){
        await this.secondarycolor.click();
        console.log(`${this.secondarycolor.description()}`)
    }

    public async updateSecondayColor(){
        await this.secondarycolorchange.fill("#FF1");
        console.log(`${this.secondarycolorchange.description()}`)
    }

    public async updateClientLogo(){
        let newlogo =  this.page.waitForEvent('filechooser');
        await this.clientlogo.click();
        let clientlogo = await newlogo;
        await clientlogo.setFiles('files/orangehrm-logo.png');
        await this.page.waitForTimeout(3000);
        await expect(this.logofailed).toBeVisible();
        
    }
    
    public async updateClientBanner(){
        let [cBanner] = await Promise.all([
            this.page.waitForEvent('filechooser'),
            await this.clientbanner.click()
        ])
        await this.page.waitForTimeout(3000);
        await cBanner.setFiles('files/orangehrm-logo.png');
          
    }

     public async updateLoginBanner(){
        let [lBanner] = await Promise.all([
            this.page.waitForEvent('filechooser'),
             this.loginbanner.click()
        ])
        await lBanner.setFiles('files/orangehrm-logo.png');
          
    }
}