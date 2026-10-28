import { test, expect, Page } from '@playwright/test';


test("Welcome", async ({ page }) => {
    //first login
    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/")
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Username").fill("bhaskar");
    await page.getByPlaceholder("Password").fill("Bhaskar@123#");
    await page.getByRole("button").click();

    //add an employee in PIM module
    await page.getByRole("link", {name: "PIM"}).click();
    await expect(page.getByRole("heading", {name: 'Employee Information'})).toBeVisible();
    await page.getByRole("button",{name: 'Add'}).click();

    //Fill Employee details
     let newEmpFN = "Test"
    let newEmpLN = "User" + Date.now();
    await expect(page.getByRole("heading",{name: 'Add Employee'})).toBeVisible();
    await page.locator("//input[@name='firstName']").fill(newEmpFN);
    await page.locator("//input[@name='lastName']").fill(newEmpLN);
    await page.getByRole("button",{name: 'Save'}).click();
   // console.log("Created Emp::"+(newEmpFN+newEmpLN));
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
    await expect(page.getByText(newEmpFN + " " + newEmpLN)).toBeVisible();
    let test= await page.getByRole('textbox',{name: 'Last Name'}).inputValue();  
    console.log(test);
    //await expect(page.getByRole('textbox',{name: 'Last Name'})).toContain(newEmpLN);
    await expect(page.getByRole('textbox',{name: 'Last Name'})).toHaveValue(newEmpLN);
    
    //Create new user in Admin module
    await page.locator("//span[text()='Admin']").click();
    await expect(page.getByRole("heading", {name: "System Users "})).toBeVisible();
    await page.locator("//div[@class='orangehrm-header-container']/button").click()

   
    await page.locator("//label[normalize-space()='User Role']/../..//div[@class='oxd-select-text-input']").click();

    await page.locator("//label[normalize-space()='User Role']/../../..//span[text()='ESS']").click();
    //Enter employee Name
    await page.locator("//label[text()='Employee Name']/../..//input").fill(newEmpFN + " " + newEmpLN);
    await page.locator("//label[text()='Employee Name']/../..//div[@role='option']/span[normalize-space()='"+newEmpFN+" "+newEmpLN+"']").click()

    await page.locator("//label[normalize-space()='Status']/../..//div[@class='oxd-select-text-input']").click();
    await page.locator("//label[normalize-space()='Status']/../../..//span[text()='Enabled']").click();
    await page.locator("//label[text()='Username']/../..//input").fill(newEmpFN + newEmpLN);
    let newUser = newEmpFN+ newEmpLN;
    let pwd="Baskar@123#";
  
    await page.locator("//label[text()='Password']/../..//input").fill(pwd);
    await page.locator("//label[text()='Confirm Password']/../..//input").fill(pwd);
    await page.locator("//div[@class='oxd-form-actions']/button[text()=' Save ']").click();
    await expect(page.getByText("Successfull")).toBeVisible();
    
    console.log("UserNmae::" + newUser);
    console.log("Password::" + pwd);
    await expect(page.getByRole('heading',{name:"System Users"})).toBeVisible();
    
    await page.locator("//span[@class='oxd-userdropdown-tab']//i").click();
    await page.locator("//a[text()='Logout']").click();
    
    //login with newly created user
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Username").fill(newUser);
    await page.getByPlaceholder("Password").fill(pwd);
    await page.getByRole("button").click();
    
    //update user information
    await page.locator("//span[text()='My Info']").click();
    await page.locator("//label[text()='Nationality']/../..//i").click();
    await page.locator("//label[text()='Nationality']/../..//span[text()='Indian']").click();
    await page.locator("//label[text()='Marital Status']/../..//i").click();
    await page.locator("//label[text()='Marital Status']/../..//div[@role='option']/span[text()='Single']").click();
    // await page.locator("//div[@class='oxd-radio-wrapper']//input[@value=1]").check();
    //await page.getByRole("radio", { name: "Male", exact: true }).click();
    await page.getByText("Male", { exact: true }).click();
    expect(await page.locator("//div[@class='oxd-radio-wrapper']//input[@value=1]").isChecked()).toBeTruthy();
    await page.locator("//div[@class='oxd-form-actions']//button[@type='submit']").click();
    await expect(page.getByText("Successfull")).toBeVisible();
 
});

