// let score=40
let score="40abc"
console.log(typeof score)

let ValueInNumber=Number(score)
console.log(typeof ValueInNumber)
console.log(ValueInNumber)
console.log("----------------------------------")
//score="40" or "40abc" or null or undefined 
// if score = 40 then it will give  console.log(ValueInNumber) 40 otherwise 
// score = 40abc or undefined case it will give   console.log(ValueInNumber)=> NaN 
// score = null then it will give answer 0  

let loggedIn=1

let booleanInLogged=Boolean(loggedIn);
console.log(booleanInLogged);

// 1=>true  and  0=> false
// ""=>false  and  "anything"=>true
console.log("----------------------------------")


let someNumber=434

let stringNumber=String(someNumber)
console.log(someNumber)
console.log(typeof someNumber)
console.log("----------------------------------")


// *************************************OPERATIONS*******************************

let str1="Hello "
let str2=" Saradindu"
console.log(str1+str2)