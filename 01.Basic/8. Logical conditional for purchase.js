// User is only allowed to make a purchae when he:
// logged in 
// email verified
// cardInfo - valid
// if anyone is missing, stop purchase

var is_loggedin = true;
var is_email_verified = true;
var cardInfo_valid = true;

// if(is_loggedin){
//     console.log("Logged In");
//     if(is_email_verified){
//         console.log("Email verified");
//         if(cardInfo_valid){
//             console.log("You can purchase")
//         }
//     }
// }

if(is_loggedin && is_email_verified && cardInfo_valid){
    console.log("Allowed to acces");
}else{
    console.log("Not allowed to access");
}