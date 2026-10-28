
//let numbers:number[] = [1,2,3,4]
let numbers = [1,2,3,4,"one"] // initailly allowed different types
console.log([...numbers])
//numbers.push(true) // we can not add further different types after initialization
let userNames:string[] =["one", "two","three"]
let isBoolean: boolean[] = [true, false, true, false];

//Mixed types
let mixedTypes: (number | string | boolean)[] = [10, "John", true]

 console.log([...mixedTypes])
 mixedTypes.forEach( val => console.log(val))

//tuple: is an array with fixed number of elemetns with same order
let pperson:[String, number, boolean] =["Allen", 20, true]
console.log("Tuple::"+pperson)

function demoAdd(a:number, b:number):number {
    return a+b;
}

let result:number = demoAdd(10,20)
console.log(result)

type user ={
    name: string;
    age : number;
    isStudent: boolean
};

let userData:user ={
    name: "User1",
    age: 20,
    isStudent: true
}

console.log(userData.age)

type cred ={
    userName: String;
    pwd: String;
    session? : boolean //optional implementation
}
let admincredentials:cred = {
    userName : "Kite",
    pwd : "Test@123"
}
let guestcredentials:cred = {
    userName : "KiteGuest",
    pwd : "Test@123"
}

myLogin(admincredentials)
myLogin(guestcredentials)

function myLogin(creds:cred){
    console.log(creds.userName)
    console.log(creds.pwd)

}



type myEmpDetails = {
    empName: String;
    empId: number;
    sal: number;
    dept: string
}

let empCont:myEmpDetails ={
    empName:"Emp1",
    empId: 123,
    sal: 10000,
    dept:"Retail"
};

let empFull:myEmpDetails = {
    empName:"Emp2",
    empId:456,
    sal: 2000,
    dept:"Finance"
}

getEmpDetails(empCont);
getEmpDetails(empFull);

function getEmpDetails(setEmp:myEmpDetails){
    console.log(setEmp.empName + " "+setEmp.empId +" "+setEmp.sal+" "+ setEmp.dept)    
    
}

