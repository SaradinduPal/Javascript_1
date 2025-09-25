//Nullish Coalescing Operator (??): null, undefined.    // here everything is depends on "null" and "undefined"
//basically it's handling that which value should be assign and which should not

let val1;
val1=5 ?? 10 // '??' always search for a number when a number(means a true value will come) that time it will not check the second one, directly return the forst one

val1 =null ?? 4 //here it's get the number or value in second time then return this, it will always try to find number(true value)

val1=undefined ?? 10 //here also same work is hapenning

val1 = null ?? 10 ?? 20 // here answer will be 10




console.log(val1);



////Terniary Operator////
// syntax
// condition ? true statement : false statement 

//example

const icePrice =100

icePrice>=70 ? console.log("Buy") : console.log("Not Buy");

