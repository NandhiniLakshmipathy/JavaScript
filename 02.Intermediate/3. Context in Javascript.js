sayHello()

function sayHello() {
    console.log("Hello, there");
}
// ----No error in the above code----

if(2 === 2){
    console.log("this is a true statement");
}

var name2 = "Nandhini";
if(name2 === name2){
    console.log("this is also a true statement");
}

var name2 = "Nandhini";
if(name2 === window.name2){  //this gives a error
                             // but in broswer it works
    console.log("this is also a true statement");
}
