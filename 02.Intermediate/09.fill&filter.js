//fill

var testArray = [2,3,4,5,5,6,7,7,9];
console.log(testArray.fill("hello",0,2));  //[ 'hello', 'hello', 4, 5, 5, 6, 7, 7, 9 ]


var num = [1,2,3,4,5,6,7,8,9];
var result = num.filter( (e) => e>5);
console.log(result);  //[ 6, 7, 8, 9 ]


