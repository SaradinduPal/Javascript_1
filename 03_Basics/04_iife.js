                                //Immediately Invoke Function Expression(IIFE)


//when we immediately call a particular function, and when we want to get relief from global scope polution, that time use (IIFE)

//Here we bind up the "function decleration" into a first bracket

function one(){
    console.log("This is one function");
} one();//this is normal function, bellow one is "iife", only use first bracket into the main function body

// ---------------------------------
//----------------------------------
//Example
(function randomname(){

}); //and function calling time we don't need call with full name=> randomname(), only write () and must end with semi-colon ";"

// ---------------------------------
//----------------------------------

(function one1(){
    console.log("This is one1 function");
}) ();  //() means function calling and must end with semi-colon ";"
//instead of this "one()" =>  use only (),, works same

//example for arrow function
( ()=>{
    console.log("This is happning with arrow function");
})();

//example
((nam)=>{//By passing argument in function
    console.log(`My name is ${nam}`);
} )("Sartakiiiii");