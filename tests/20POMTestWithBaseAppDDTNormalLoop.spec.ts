import { test } from "../fixtures_org/appbase";
import { employees } from "../testdata/emp.json";

test.describe('Data Driven Tests', () => {

    test(`Add Employee Test`, async ({ App, testData }) => {
        await App.basePage.navigateTo("https://qtpsudhakar-vibetestq-hrm.up.railway.app");
        await App.loginPage.verifyLoginPageDisplayed();
        await App.loginPage.enterUserName(testData.username);
        await App.loginPage.enterPassword(testData.password);
        await App.loginPage.clickOnLogin();
        await App.dashboardPage.VerifyDashboardDisplayed();

        for (const employee of employees) {
            await App.dashboardPage.clickOnPIMLink();

            await App.pimPage.VerifyPIMDisplayed();
            await App.pimPage.clickOnAddEmployeeLink();

            await App.addEmployeePage.VerifyAddEmployeeDisplayed();
            await App.addEmployeePage.enterFirstName(employee.firstName);
            await App.addEmployeePage.enterLastName(employee.lastName);
            await App.addEmployeePage.enterUniqueEmployeeId();
            await App.addEmployeePage.clickOnSaveButton();

            await App.personalDetailsPage.VerifyPersonalDetailsDisplayed();

        }
    });
});