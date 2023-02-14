var users = ["nandhini", "kalidass", "ken", "ajay"];

console.log(users.slice(1,3)); //[ 'kalidass', 'ken' ]

users.splice(1,2,"spliced")
console.log(users);  //[ 'nandhini', 'spliced', 'ajay' ]