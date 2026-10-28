import {test} from '../fixtures/base';

test('adminOrgGenIfo', async({basepage,login,testData,adminorg})=>{
    
    basepage.navigateURL("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");

    await login.enteruserName(testData.loginCred.username);
    await login.enterPassword(testData.loginCred.password);
    await login.loginButton();

    await adminorg.adminLinkClk();
    await adminorg.verifyAdminHeader();
    await adminorg.adminOrgClk();
    await adminorg.genralInfoClk();
    await adminorg.verifyGeneralInfoHeader();
    await adminorg.genInfoEdit();
    await adminorg.genInfoEdit();
    await adminorg.cityTextData();
    await adminorg.notesProvided();
    //await adminorg.contrySelected();    
    await adminorg.clickSave();
});