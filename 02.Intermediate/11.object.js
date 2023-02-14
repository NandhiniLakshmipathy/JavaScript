var user = {
    firstName : "Nandhini",
    lastName : "Lakshmipathy",
    role : "Student",
    isLoggedIn : true,
    loginCount : 10
}

console.log(user.firstName);   //Nandhini
console.log(user["lastName"]);   //Lakshmipathy

console.log(user.loginCount);  //10
user.loginCount = 22;
console.log(user.loginCount);  //22

console.log(user);  
//{
//     firstName: 'Nandhini',
//     lastName: 'Lakshmipathy',
//     role: 'Student',
//     isLoggedIn: true,
//     loginCount: 22
//   }
console.table(user);

// ┌────────────┬────────────────┐
// │  (index)   │     Values     │
// ├────────────┼────────────────┤
// │ firstName  │   'Nandhini'   │
// │  lastName  │ 'Lakshmipathy' │
// │    role    │   'Student'    │
// │ isLoggedIn │      true      │
// │ loginCount │       22       │
// └────────────┴────────────────┘