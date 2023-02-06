// 2 types of context  --1. Global context 2. execution context 

// Execution context ---variable object 
//                     -Scope chain 
//                     - This 
// conditions: Fuction declarations are scaned and made available
//             variable declarations are scaned and made undefined

sayname("l")
function sayname(nam){
    var name = "Nandhini";
    console.log(nam+name);
}
// No error
tipper("5")

function tipper(a){
    var bill = parseInt(a)
    console.log(bill+5);
}

//using variable
//when we call the fn at top here --error
//at bottom -- no error

// var bigtipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill+5);
    
// }
// bigtipper("10")

// bigtipper("10")   //---error

// var bigtipper = function (a) {
//     var bill = parseInt(a);
//     console.log(bill+5);
    
// }


console.log(myname);
var myname = "nANDHINI";  //--undefined


function fullname() {
    var myname = "kalidass";
    console.log(myname);
    
}
fullname()


console.log(myname)