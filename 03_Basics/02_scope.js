//Global Scope and Local Scope

if(true){
    // let a=30 // it will not be executed
    // const b=20  // it will not be executed
    var c=40 // it will execute , so that we never use this var

}

// console.log(a);
// console.log(b);
console.log(c);

//Nested scope 

if(true){
    function one(){
        let result=10;
        console.log("one");
        function two(){
            res =result+10;
            console.log("two",result);
        }
        // console.log(res);
        two()
    }
   one()
}


//////////////////////////////////////////////////////////////////////////

console.log("Different types of function decleration");

function Add_TwoNo1(){
    console.log(10+20);
}

//or
const Add_TwoNo2=function(){ //here we hold this function into a variable,
    console.log(10+20);      //It's Called "Hoisting"

}

Add_TwoNo1()
Add_TwoNo2()