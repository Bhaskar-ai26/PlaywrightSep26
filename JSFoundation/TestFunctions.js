//fahrenheit convert
function toCelsius(...fahrenheit){

    let allToCelsius = [];

    for(let i=0;i<fahrenheit.length;i++){

        allToCelsius.push((fahrenheit[i]-32) * (5/9))

    }
    return allToCelsius;
}

let x = [10,20,30,40]

console.log("In celsius "+ toCelsius(...x))


//
function summAll(...objX){

    let sum = 0;
    for(let myPbj of objX){
        sum+=myPbj;
    }
    return sum

}

let val = [1,2,3,4,5]
console.log("Teh sum is "+summAll(...val))


//function expresion
const add = function(a,b,c){

    return (a+b+c);

};

console.log("the sum is "+ add(1,2,3))

//function hoisting
let sum = add(2,3)
console.log(sum)

function add(a,b){
    return a+b;
}

//
let sum1 = add(2,3); // throw an error : cannot access 'add' before initialization
console.log(sum1);

const add= function(a,b){
    return a+b;
};



