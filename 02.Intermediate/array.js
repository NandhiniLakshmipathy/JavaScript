var countries = ["India", "USA", "UK", "Canada"];

var states = new Array("TamilNadu", "Kerala", "A.P", "Karnataka");

console.log(states); //[ 'TamilNadu', 'Kerala', 'A.P', 'Karnataka' ]

console.log(states[1]); //Kerala

states[1] = "Delhi";
console.log(states);  //[ 'TamilNadu', 'Delhi', 'A.P', 'Karnataka' ]

var user = ["Nandhini", "nandhini02lak@gmail.com", 21, true];
console.log(user);  //[ 'Nandhini', 'nandhini02lak@gmail.com', 21, true ]

user.pop(); //removes last element
console.log(user);  //[ 'Nandhini', 'nandhini02lak@gmail.com', 21 ]

user.unshift("New Value");  //adds element at front
console.log(user);  //[ 'New Value', 'Nandhini', 'nandhini02lak@gmail.com', 21 ]

user.shift();  //Removes first element
console.log(user); //[ 'Nandhini', 'nandhini02lak@gmail.com', 21 ]

//Index of an element
console.log(user.indexOf("nandhini02lak@gmail.com")); //1

console.log(user.indexOf("newy")) //-1 -->element not in array

//Iterating string
console.log(Array.from("Nandhini"));  //['N', 'a', 'n','d', 'h', 'i','n', 'i']

