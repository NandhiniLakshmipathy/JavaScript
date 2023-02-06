// if the fn/anything that does not have the var/thing it asks for the higher one not to lower scope one

var myName = "Nandhini";
console.log(myName);

// function sayname(){
//     console.log(myName);   //op: Nandhini, since it gets this from the above higher scope
// }
// sayname();


// function sayname() {
//     var myName = "Kalidass";
//     console.log(myName);   //op: Kalidass, since it has its own var
// }
// sayname()


function sayname() {
    // var myName = "L.Nandhini";
    console.log(myName);

    sayname1();
    function sayname1() {
    console.log(myName);
}
}
sayname();

