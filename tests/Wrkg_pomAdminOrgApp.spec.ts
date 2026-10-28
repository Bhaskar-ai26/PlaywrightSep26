import {test} from '../fixtures/baseApp';

test('adminOrgGenIfo', async({app,testData})=>{
    
    await app.basepage.navigateURL("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");

    await app.login.enteruserName(testData.loginCred.username);
    await app.login.enterPassword(testData.loginCred.password);
    await app.login.loginButton();

    await app.adminorg.adminLinkClk();
    await app.adminorg.verifyAdminHeader();
    await app.adminorg.adminOrgClk();
    await app.adminorg.genralInfoClk();
    await app.adminorg.verifyGeneralInfoHeader();
    await app.adminorg.genInfoEdit();
    await app.adminorg.cityTextData();
    await app.adminorg.notesProvided();
    await app.adminorg.contrySelected();    
    await app.adminorg.clickSave();
});