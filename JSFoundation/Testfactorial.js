//5! = 5*4*3*2*1

/* function genFactorial(fact){
        let factNum = 1;
    for(let i=fact ; fact>1 ; fact--){
        factNum = factNum * fact;
    }
    return factNum;
}

let a = 5;
console.log("Factorial of "+ a + " is "+ genFactorial(a)) */

function getFact(n){
    let fact = 1;
    for(i=2; i <=n; i++){
        fact = fact * i;
    }
    return fact;
}

let factOf = 10;
console.log("The factorial of "+factOf+" is "+getFact(factOf))