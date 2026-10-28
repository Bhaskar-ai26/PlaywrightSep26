let test = function(a, b){
    return a+b;
};

console.log(test(2,3))

/* -------------------*/

function cal(a,b,oper){
    return oper(a,b)
}

let mul = cal(3,5,function(m,n){
    return m*n;
});
console.log(mul)

/* -----------Function expression--------*/

function calcualte(a, b , callback){

    return callback(a,b);
}

let add = function (x,y){
    return x+y;

}

let mulll = function (m,n){
    return m*n;
}
 
 let sum = calcualte(2,3, add);
 let prod = calcualte(2,3, mulll);

console.log("Sum is "+ sum)
console.log("the product is "+prod)

/* -----------Function Arrow--------*/

function arrowCal(a,b, callback){

    return callback(a,b);
}

let addArrow = (x,y) =>{
    return x+y;

}

let mulArrow = (m,n) =>{
    return m*n;
}

console.log(arrowCal(2,3,addArrow));
console.log(arrowCal(2,3,mulArrow));
 
/* More Arrow */

const result = (a,b) =>  a+b;
console.log(result (2,3))

const result1 = val => "Hello " +val;
console.log(result1("welcome"))



const myFunc = (x,y) => x+y;

console.log(myFunc(2,3))
console.log(typeof myFunc)