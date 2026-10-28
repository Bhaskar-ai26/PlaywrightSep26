import {test} from '../fixtures/baseApp.js'


test('AdminCrpBrand', async ({app,testData})=>{
     app.basepage.navigateURL("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");
    await app.login.enteruserName(testData.loginCred.username);
    await app.login.enterPassword(testData.loginCred.password);
    await app.login.loginButton();

    await app.adminorg.adminLinkClk()
    await app.admincorpbrand.clickCorpBrand();
    await app.admincorpbrand.verifyCorpHeader();

    await app.admincorpbrand.pickPrimaryFontColor();
    await app.admincorpbrand.updatePrimayFontColor();

    await app.admincorpbrand.pickPrimaryFontColor();
    await app.admincorpbrand.updatePrimayFontColor();

    await app.admincorpbrand.pickSecondayColor();
    await app.admincorpbrand.updateSecondayColor();

    await app.admincorpbrand.updateClientLogo();
    await app.admincorpbrand.updateClientBanner();
    await app.admincorpbrand.updateLoginBanner();




})