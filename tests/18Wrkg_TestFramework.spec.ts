//import {chromium, test} from "@playwright/test"
import { test} from "../fixtures/baseApp" 
//Hooks are setting up and tearing down the test conditions
//Hooksare optional and use it when pre or post conditions are needed

 test.describe('Login Test' ,()=>{
  
  /*   test.beforeAll(async({},testinfo)=>{
        console.log("Executing before all::" +test.info().title)
        if(testinfo.title.includes('Valid Login')){
            testinfo.setTimeout(50000)
            console.log("Setting timeout for Valid Login test")
        }
    }),
    test.beforeEach(async ({})=>{
   console.log("Executing before each test::" + test.info().title);
    }),

    test.afterEach(async ({}) =>{
        console.log("Executing after each test::" + test.info().title)
    }),

    test.afterAll(async ({})=>{
        console.log("Executing after All::" + test.info().title)
    }), */

    test('Valid Login',  async ({})=>{
       console.log("Executing valid login::" + test.info().title);
       //console.log("Test data for valid login::" + JSON.stringify(testData))
    }),
    test('Invalid Login',  async ({})=>{
        console.log("Executing invalid Login::"+test.info().title)
    })
    
}); 
