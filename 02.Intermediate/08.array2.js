// Callback and arrow function in array

// function iseven(element) {
//     if (element % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// var result = iseven(3);
// console.log(result);


// function iseven(element){
//     return(element%2 === 0);
// }

// console.log(iseven(2))


// var iseven = (element) => {
//     return element%2 === 0;
// }

// console.log(iseven(6));


var result = [1,2,3,4,5].every( (element) => {return element%2 === 0}); //with return
console.log(result);

var result = [2,4,6].every( (element) => (element%2 === 0)); //without return
console.log(result);

