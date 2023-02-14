var names = ["Youtube", "Facebook", "Instagram"];

// for of loop

// for(const i of names){
//     console.log(i);
// }

// for in loop

const symbols = {
    yt : "Youtube",
    fb : "Facebook",
    ig : "Instagram"
}

for (const i in symbols){
    console.log(` Key is: ${i} and the value is: ${symbols[i]}`);
}

//  Key is: yt and the value is: Youtube
//  Key is: fb and the value is: Facebook
//  Key is: ig and the value is: Instagram