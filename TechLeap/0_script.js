// let and var

//var
console.log(num);  //undefined
var num = 20;

if(true){
    var i = 23;
}
console.log(i); //23

//let -- block scope

if(true){
    let j = 90;
}
//console.log(j);  //error

//console.log(data);  //error
//let data = 34;

//REST parameters
console.log("REST Parameters");
function restPara(Fname, ...ids) {
    ids.forEach(id => console.log(id));  //rest parameters should be added at the end
}

restPara("Nandhini", 1,2,3)

//Destructuring arrays
console.log("Destructuring arrays");

let carIDs = [1,2,3,4,4];
//let [car1, car2, ...reamining] = carIDs;
let car1, car2, reamining;
//[car1, car2, ...reamining] = carIDs;
[, car2, ...reamining] = carIDs;  //skips the first element
console.log(car1, car2, reamining);

//Destructuring objects
console.log("Destructuring objects");

let obj = {id:1, Name:"Nandhini"};
//let {id, Name} = obj;
let id, Name;
({id,Name} = obj);
console.log(id,Name);

//Spread syntax
console.log("spread syntax");

function startCars(car1, car2, car3, ...remain)
{
    console.log(car1, car2, car3, remain);
}

let car = [1,2,3,4,5];
startCars(...car);

//typeof() -- builtin function
console.log("typeof()");

console.log(typeof(1));  //number
console.log(typeof(true)); //boolean
console.log(typeof('Hello')); //string
console.log(typeof(function(){})); //function
console.log(typeof({})); //object
console.log(typeof(null)); //object
console.log(typeof(undefined)); //undefined
console.log(typeof(NaN)); //number

//common type conversions
console.log(Number.parseInt("345gh")); //345
console.log(Number.parseFloat("d345gh")); //NaN
//concert to string --> foo.toString()
let a=90;
console.log(typeof(a.toString()));

//Controlling loops
console.log("break statemnt");
let k = 0;
for(;k<=12; k++)
{
    if(k == 8){
        break;
    }
    console.log(k)
}

//console.log(k)

console.log("continue statement");
for(let n = 0; n<4; n++){
    if(n === 2){
        continue;
    }
    console.log(n);
}


