
//print denaminations
let denominations = [2000,500,200,100,50,20,10,5,2,1]
let cur = 999

for ( let i = 0; i<denominations.length; i++){

let denamNum = Math.floor( cur/denominations[i])
if(denamNum != 0){
let amount = Math.floor( cur%denominations[i])
    console.log(denamNum + " x " + denominations[i] +" = " + (denamNum * denominations[i]));
    cur = amount;
}
}

