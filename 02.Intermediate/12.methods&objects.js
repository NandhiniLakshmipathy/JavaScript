var user = {
    firstName : "Nandhini",
    lastName : "Lakshmipathy",
    role : "Student",
    isLoggedIn : true,
    loginCount : 10,
    courseList : [],
    //method inside an object
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return ` ${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },

    info : function(){
        return `${this.firstName} is a ${this,this.role} has loggedIn with a count of ${this.loginCount} and enrolled total of ${this.courseList.length} courses`
    }
}

var courseList = true;

console.log(user.getCourseCount());  //Nandhini is enrolled in total of 0 courses
user.buyCourse("React JS Course");
user.buyCourse("JavaScript");
console.log(user.getCourseCount());  //Nandhini is enrolled in total of 2 courses

console.log(user.info());  //Nandhini is a Student has loggedIn with a count of 10 and enrolled total of 2 courses

