//import {test, expect} from '@playwright/test'
import {test} from '../fixtures/base';

/* import {MyLoginPage} from '../pom_pw/myloginpage.ts'
import {myadminpage} from '../pom_pw/myadminpage.ts'
import {myDashboard} from '../pom_pw/mydashboardpage.ts'
import {mypimlink} from '../pom_pw/mypimlink.ts'
import {addEmpData} from '../pom_pw/addemployeepage.ts'
import { myPersonalPage } from '../pom_pw/mypersonalpage.ts' */

//import { MyLoginPage,MyDashboard,MyPersonalPage,Myadminpage,Mypimlink} from '../pom_pw';

test('Login Test', async ({testData, login, dashboard,addemp,admin,personalData,pim,basepage}) =>{

     await basepage.navigateURL("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");

    //login
    //const hrmLogin = new MyLoginPage(page);
    await login.getLoginHeaderText();
    await login.enteruserName(testData.loginCred.username);
    await login.enterPassword(testData.loginCred.password);
    await login.loginButton();

//Dashboard
//const dashboardOption = new myDashboard(page);
await dashboard.dashboardCheck();
await dashboard.pimLink();
await dashboard.adminLink();

// Admin link
   // const adminOption = new myadminpage(page);
   /*  await admin.verifyAdminpage();       
    await admin.searchUser('bhaskar');  */

// PIM link
   // const mainpimlink = new mypimlink(page);
    await pim.pimLinkClick();
   await pim.checkPIMHeader();
   await pim.addEmpClick()

   //add emp
   // const mainEmpAdd = new addEmpData(page);
     await addemp.verifyEmpHeader();
     await addemp.empFirstName(testData.adminData.firstName);
     await addemp.empLastName(testData.adminData.lastName);
     await addemp.empID();
     await addemp.myEmpSave();

     //personal Details 
    // const personalDetails = new myPersonalPage(page);
     await personalData.verifyPersonalDetailsHeader();

});

