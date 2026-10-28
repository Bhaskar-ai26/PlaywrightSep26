import { test as base } from '@playwright/test';
import {MyLoginPage,MyDashboard,MyPersonalPage,AddEmpData,Myadminpage,Mypimlink,BasePage,MyAdminOrg} from '../pom_pw'




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
   
}


let test = base.extend<{testData:tData,basepage:BasePage,login:MyLoginPage,dashboard:MyDashboard,admin:Myadminpage,pim:Mypimlink,addemp:AddEmpData,personalData:MyPersonalPage,
    adminorg:MyAdminOrg
}>({
    testData: async ({page}, use)=>{
        await use(testData);
    },
    basepage: async ({page}, use)=>{
        await use(new BasePage(page));
    },
    login: async({page}, use)=>{
        await use( new MyLoginPage(page) );
    },
    dashboard: async ({page}, use)=>{
        await use(new MyDashboard(page));
    },
    admin: async ({page}, use)=>{
        await use(new Myadminpage(page));
    },
    pim: async ({page}, use)=>{
        await use(new Mypimlink(page));
    },
    addemp: async ({page},use)=>{
        await use(new AddEmpData(page));
    },
    personalData: async ({page},use)=>{
        await use(new MyPersonalPage(page));
    },
    adminorg: async ({page}, use)=>{
        await use (new MyAdminOrg(page))
    }
});

export { test };