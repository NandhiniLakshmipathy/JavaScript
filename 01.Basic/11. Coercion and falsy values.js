//undefined
// null
// 0
// ''
// NaN

var user = undefined;

if(user){
    console.log("condition is true");
}


var user = null;

if(user){
    console.log("condition is true");
}

var user = 0;

if(user){
    console.log("condition is true");
}

var user = '';

if(user){
    console.log("condition is true");
}


var user = NaN;

if(user){
    console.log("condition is true");
}

var user = "undefined";

if(user){
    console.log("condition is true");
}

var user = "2";

if(2 == user){  //gives true
    console.log("condition is true");
}

var user = "2";

if(2===user){  //strict checking
    console.log("condition is true");
}


//console.log(2+"2")  --- 22
