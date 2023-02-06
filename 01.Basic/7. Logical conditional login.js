// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = true;
var google = false;
var facebook = true;

if(email || google || facebook){
    console.log("Can Access");
}else{
    console.log("Cannot Access");
}

