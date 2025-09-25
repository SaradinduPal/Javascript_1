const userEmail="aa@gmail.com" //when there is something as a string, that time it takes as true value.
if (userEmail) {                // but empty string takes as falsey value, but for empty array it will give truthy value. 
    console.log("okay");
}else{
    console.log("not okay");
}

//now talk about what are the truthy and falsey values

//falsey values
//1) false 2) 0 3)-0 4)BigInt 0n 5)"" 6)null 7)undefined 8)NaN 


//other than those , all are the truthy values

//truthy values
//1)"0" 2)'false' 3)" " 4)[] 5) {empty object} 6) function(){} <= empty function


//for empty array how to check the condition
const emptyArray=[];
if (emptyArray.length===0) {
    console.log("empty array");
}


//for empty object how to check the condition
const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("Empty Object");
}
