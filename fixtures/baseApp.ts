import { test as base } from '@playwright/test';
//import {MyLoginPage,MyDashboard,MyPersonalPage,AddEmpData,Myadminpage,Mypimlink,BasePage,MyAdminOrg} from '../pom_pw'
import * as pages from '../pom_pw/index'

let testData: tData ={
    loginCred:{
        username:'bhaskar',
     password:'Bhaskar@123#'
    },
    adminData:{
        firstName:'TestFirst',
        lastName:'TestLast'
    }
};

type tData ={ 
    loginCred:{
            username:string;
            password:string;
        },
    adminData:{
        firstName:string;
        lastName:string;
    }
   
};
type App = {  
    basepage: pages.BasePage;
    login: pages.MyLoginPage;
    dashboard: pages.MyDashboard;
    admin: pages.Myadminpage;
    pim: pages. Mypimlink;
    addemp: pages.AddEmpData;
    personalData: pages.MyPersonalPage;
    adminorg: pages.MyAdminOrg;
    admincorpbrand: pages.AdminCorpBranding;
};


let test = base.extend<{testData:tData,app:App,beforAndAfterTest:void},{bAll:void}>({
    testData:async ({page}, use,testinfo)=>{
        console.log("Providing test data for test::" + testinfo.title);
        await use(testData);
    },
    beforAndAfterTest: [async ({},use,testinfo)=>{
         console.log("Executing before each test::" + test.info().title);
          if(testinfo.title.includes('Valid Login')){
            testinfo.setTimeout(50000)
            console.log("Setting timeout for Valid Login test")
        }
        //Before calling use(), will be before the test has executed
        await use();
        //after calling use(), will be after the test has executed
        console.log("Updating test status::"+test.info().title)
    },{auto:true}],
    bAll: [async ({}, use, workerInfo) => {
        console.log("@@@Executing before all::" + workerInfo.project.name);
        await use();
        console.log("@@@Executing after all::" + workerInfo.project.name);
    },{scope:"worker",auto:true}], 
   app: async ({page},use)=>{
    await use({        
        login: new pages.MyLoginPage(page),
        basepage: new pages. BasePage(page),
        dashboard: new pages.MyDashboard(page),
        admin: new pages. Myadminpage(page),
        addemp: new pages.AddEmpData(page),
        pim: new pages.Mypimlink(page),
        personalData: new pages.MyPersonalPage(page),
        adminorg: new pages.MyAdminOrg(page),
        admincorpbrand: new pages.AdminCorpBranding(page)
    })
   }
});

export { test };