//De-Structuring
const course={
    courseName:"JavaScript",
    price:"1000",
    teacherName:"spal"
}
console.log(course.courseName);
console.log(course.price);
console.log(course.teacher); // in every time for acessing those values we have to call 
                            // "course.__" every time , but instead of this ude of course
                            //  every time we can use DeStructuring

//DeStructuring
// const {teacherName}=course;
const {teacherName:teacher }=course;
// console.log(teacherName);
console.log(teacher);

// //JOSN (it's also a type of object without having name)
// {
//     "name":"saradindu",
//     "course":"CS",
//     "price":"100"
// }                        // json is a object which have not any name


