function addNum(a, b){

    console.log("Sum is = "+ (a+b));
}

addNum(10,20)


function oddNum(n){

    if(n%2 == 1){
        return "Odd";
    }else{
       return "Even"
}
}
console.log(oddNum(10))

//
function addAllNum(...Items){

    let sum = 0;
    for(let i=0; i < Items.length ; i++){
        sum = sum+Items[i];
    }

    return sum;
}

//console.log(addAllNum(10,20,30))
let x = [10,20,30,40,50]
console.log(addAllNum(...x)) // spread 


//Return odd numbers from the range
function getAllOddNum(rStart,rEnd){
    let oddNum = [];
    for( let i=rStart; i<rEnd; i++){
        if( i %2 == 1){
            oddNum.push(i);
        }

    }
    return oddNum;

}
console.log(getAllOddNum(10,30))



