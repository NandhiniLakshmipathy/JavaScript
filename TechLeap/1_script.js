//operators

//Equality operators
console.log(5 == "5"); //checks the value
console.log(5 === "5"); //checks value and data type

console.log(3 != "3");
console.log(3 !== "3");

let val = 4;
console.log(++val); //5
let val2 = 87;
console.log(val2++); //87
console.log(val2); //88

let year = "1983";
console.log(typeof (+year));  //Number
console.log(+year);
console.log(-year); //-1983

//logical operators
// && -> has highest precedance, ||, !
console.log("logical operators");
let userSettings = null;
let deafultSettings = {name:"default"};
console.log(userSettings || deafultSettings);
console.log(userSettings && deafultSettings);
userSettings = {name:"user"};
console.log(userSettings || deafultSettings);
console.log(userSettings && deafultSettings);
console.log(!userSettings);

//relational operators -> <,>,<=,>=

console.log("Zoo".toUpperCase < "alphabet".toUpperCase);

//conditional operator
console.log("conditional op:");
var result = 5 > 4 ? 'yes' : 'no';
console.log(result);

console.log("assignment op");
// +=, -=, /=, *=, %=, >>=
let num = 67;
num +=10;
console.log(num);

//operator precedance

