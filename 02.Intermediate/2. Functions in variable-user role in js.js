// Define a fn that can ans the role of a user
// admin - gets full access
// subadmin - gets access to create/delete content
// testprep - gets access to create/delete test
// user - gets access to consume content
// other - trial user

// Input: getUseRole(name, role)

//function getUseRole(name, role){
var getUseRole = function(name,role){  //using variable
    switch (role) {
        case "admin":
            return `${name} can get full access`
            break;
        case "subadmin":
            return `${name} can get access to create/delete content`
            break;
        case "testprep":
            return `${name} can get access to create/delete test`
            break
        case "user":
            return `${name} is a trial user`
            break;
    
        default:
            return`${name} cannot have access`
            break;
    }
}

console.log(getUseRole("Nandhini","admin"));

var roles = getUseRole("Kalidass","user")
console.log(roles);

