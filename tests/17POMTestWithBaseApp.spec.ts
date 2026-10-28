import { test } from "../fixtures_org/appbase";
    
test('Login Test', async ({ testData, App }) => {

    await App.basePage.navigateTo("https://qtpsudhakar-vibetestq-hrm.up.railway.app");
    
    await App.loginPage.verifyLoginPageDisplayed();
    await App.loginPage.enterUserName(testData.username);
    await App.loginPage.enterPassword(testData.password);
    await App.loginPage.clickOnLogin();

    await App.dashboardPage.VerifyDashboardDisplayed();
    await App.dashboardPage.clickOnPIMLink();

    await App.pimPage.VerifyPIMDisplayed();
    await App.pimPage.clickOnAddEmployeeLink();
    
    await App.addEmployeePage.VerifyAddEmployeeDisplayed();
    await App.addEmployeePage.enterFirstName('John');
    await App.addEmployeePage.enterLastName('Doe');
    await App.addEmployeePage.enterUniqueEmployeeId();
    await App.addEmployeePage.clickOnSaveButton();

    await App.personalDetailsPage.VerifyPersonalDetailsDisplayed();

});