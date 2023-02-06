// Create an application with following roles
// admin - gets full access
// subadmin - gets success to create/delete content
// testprep - gets access to create/delete test
// user - gets access to consume content

var role = "subadmin";

switch (role) {
    case "admin":
        console.log("gets full access");
        break;
    case "subadmin":
        console.log("gets success to create/delete content");
        break;
    case "testprep":
        console.log("gets access to create/delete test");
        break;
    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("trial user");
        break;
}