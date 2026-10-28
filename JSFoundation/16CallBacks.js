//JS behaves Asynchronius programming
//for Test automation synchronous is mandatory
//callback is first solution to make JS test to behave asynchronous to synchronous


// callback hell
//calling a funtion from another funcion and calling another function
//promises are the next solution to avoid callback

function enterUserName(callback1, callback2,name="Bhaskar"){
    setTimeout(() =>{
        console.log("UserName is entered:: "+name),
        callback1(callback2)
    }, 200)
}

function enterPwd(callback2,pwd="test"){
    setTimeout(() =>{
        console.log("Pwd is entered :: "+pwd),
        callback2()
    },2000)
}

function buttonClick(){
    setTimeout(() => {
        console.log("Button is clicked")
        
    }, 100);
}
enterUserName(enterPwd,buttonClick);

