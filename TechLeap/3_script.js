// bind -> to create a copy of a function and also change the context

let obj2 = {
    carId : 23,
    getId: function(){
        return this.carId;
    }
};

let newCar2 = {carId:45};
let newFn = obj2.getId.bind(newCar2);
console.log(newFn());


//Arrow functions -> (parameter) => return_value //do not have their own "this" value
// "this" refers to the enclosing context
console.log("----Arrow functions----");
let func1 = () => 123;
console.log(func1());

let func2 = (id,city) =>{
    return `${id} : ${city}`;
};

console.log(func2(12, "chennai"));

//default parameters

let trackCar = function(city, name = "Ace"){
    console.log(`${city} - ${name}`);
};

trackCar("chengalpattu"); //if parameter is provided that is taken as argument

