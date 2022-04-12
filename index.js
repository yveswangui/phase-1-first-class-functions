function receivesAFunction(callBackFunc){
    return callBackFunc()
}

function returnsANamedFunction(){
    return  function anotherFunction(){
        console.log("Hey, it's Wangui");
    }
}


function returnsAnAnonymousFunction(){
    return() => console.log("this is an anonymous function")
}

