//Print factors 
function printFactor(num){
    let fact = []
    for(let i=1; i<=num ; i++)
    if(num%i == 0){
        fact.push(i);
    }
    return fact;
}

let n = 10
console.log("The factors of "+n1+" are "+printFactor(n))


//Print factors 
//(n/2)+1 to n1 will not be factores expect n iteslf
function printFactor(num){
    let fact = []
    for(let i=1; i<=num/2; i++)
    if(num%i === 0){
        fact.push(i);
    }
    return fact;
}

let n1 = 10
console.log("The factors of "+n1+" are "+printFactor(n1))