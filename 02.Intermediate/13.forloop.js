// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

const myStates = ["Tamil Nadu", "Kerala", "Karnataka", 2023, "Andra Pradesh"];
for (let index = 0; index < myStates.length; index++) {
    if (typeof myStates[index] !== "string") {
        continue;
    }
    console.log(myStates[index]);  
}

//Tamil Nadu
// Kerala
// Karnataka
// Andra Pradesh