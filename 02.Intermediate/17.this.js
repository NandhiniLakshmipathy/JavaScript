// For all regular function calls, this points to "window" object
// regular function call - SayHello();
// user.sayHello() - is not a regular function call

var user = {
    firstName : "Nandhini",
    lastName : "Lakshmipathy",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 10: ",this);

        function sayhello() {
            console.log("Hello");
            console.log("Line 14: ", this)  // returns the window object
        }

        sayhello();
    }
}

user.getCourseCount();