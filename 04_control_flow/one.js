//if
const isUserLoggedIn=true;
if(isUserLoggedIn){
    console.log("Hello User");
}
if(2=="2"){ //here type is not checking
    console.log("both are same");
}
if(2==="2"){//here value+type both are checking
    console.log("both are not same");
}

console.log("-----------------------------------------------------------------");



const temperature=44;
if (temperature===44) {
    console.log("Right temperature");
}else{
    console.log("Wrong temperature");   
}
console.log("EXecuted");


console.log("------------------------------------------------------------------");

const price=1000

if(price<500){
    console.log("less than 500");
}else if(price<750){
    console.log("less than 750");
}else{
    console.log("less than 1400");
}
// -----------------------------------------------------------------------------------


//there are some relational case of condition 
//those are 
//              &&=> AND    ||=>OR  


//AND means both condition should be true 
// OR means if one statement is true then full code will be run


