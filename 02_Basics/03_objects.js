//singleton

//object literals


const mySym=Symbol("key1") //defined the symbol

const user={
    name:"Saradindu",
    age:20,
    [mySym]:"pass1234",
    location:"kollkata",
    "email id": "abc@gmail.com",
    lastloginDays:["sunday","friday"]
}
console.log(user.name);
console.log(user["age"]);
console.log(user["email id"]);
console.log(user[mySym]);

console.log("---------------------------------------");

//change the value of object
user["email id"]="123@gmail.com";
console.log(user);


//if you don't want to change or modify the values of the object then you have to "freex()" this particular object;
// Object.freeze(user); //freez() is used here
console.log("-------------------------------");



user.greeting=function(){
    console.log("hello friends");   
}       //by this we are adding one more element or function in this object

console.log(user.greeting());

user.greetingTwo=function(){
    console.log(`hello vai ${this.name}`);   
}
console.log(user.greetingTwo());
