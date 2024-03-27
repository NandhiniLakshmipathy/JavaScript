//function scope -> inside function only
function startCar(carId){
    let message = "Starting";
    let startFn = function turnKey(){
        //console.log(message);
        let message = "override";
        console.log(message); //override
    }
    startFn();
    console.log(message); // starting
}


startCar(123);
//console.log(message); //error

//Block Scope
console.log("Block scope");

let message = 'outside';
if(5 === 5)
{
    let message = 'equal'; // if it was var and acessed oiuside it prints equal
    //there is no such thing block scope for var keyword
    console.log(message);
}
console.log(message);

//IIFE's
console.log("----IIFE'S----"); //Immediately Invoked Function Expression

(function(){
    console.log("hello");
}) ();

var app = (function(){
    let carId = 123;
    console.log('inside function');
    return {};
}) ();

console.log(app);

//Closures
console.log("----Closures---");

let app2 = (function(){
    let carId = 123;
    let getId = function(){
        return carId;
    };
    return{
        getId:getId
    };
})();

console.log(app2.getId());

//this keyword -> special object in context

console.log("this keyword");

let obj = {
    carId: 123,
    getId:function(){
        console.log(this);
        return this.carId;
    }
};

console.log(obj.getId());

// call and apply -> to change the value of 'this' ie. the context within the function

let o = {
    carId: 12,
    getId:function(prefix){
        console.log(this);
        return prefix + this.carId;
    }
};
let newCar = {carId:40};
//console.log(o.getId.call(newCar));

console.log(o.getId.apply(newCar, ["ID: "]));




