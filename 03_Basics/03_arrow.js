const user={
    name:"Saradindu",
    age:20,

    welcomeMsg:function() {
        console.log(`${this.name}, welcome to this place`);
        console.log(this); // "this" keyword print the current context, it will print all elements of the "user" object here 
        
    }
}

user.welcomeMsg();
console.log(this);//it will give a empty object, because there is nothing is globally defined
                  // in "node" environment globally "this" always give empty object,,
                  //but in browser there always a global object which called  "WINDOW OBJECT" 


console.log("------------------------------------------------------------------------------");
//now if I print another name instead of "Saradindu"
user.name="Sayantan"; // define the name explictly
user.welcomeMsg();


console.log("------------------------------------------------------------------------------");
console.log("------------------------------------------------------------------------------");

        //ARROW FUNCTION
function one(){
    // let name="Saradindu"
    // console.log(this.name); //in this way we can't use "this" keyword into a function,it is okay for "object",
                                //here it will give "undefined"
}  
one()

const one1= function(){
    // let name="Saikat"
    // console.log(this.name); // this type of function declaration is also same as the previous function,give "undefined"
    
}
one1()

//Arrow function

const one2= ()=> {
    // let name= "Satyam"
    // console.log(this.name);//arrow function declaration is also same as the previous function, it wll give "undefined"
}
one2()

// ------------------------------------------------------------

console.log("exapmle of arrow function");

//example 1
const addTwoNo= (a,b)=>{
    return a+b
}
console.log(addTwoNo(4,4));

//example 2

//we can use arrow function in one line, this called "implicit return arrow function"
const addTwoNumber= (a,b)=> (a+b)  //one liner arrow function, without use "return" keyword.
                                  //In case of implicit(without return keyword) arrow function all time use () or first bracket. 

console.log(addTwoNumber(4,7));

// ----------------------------------------------------------------------------------------------------------/

// const objPrint=()=> { username:"Saradindu"} //it's always give answer=undefined because we didn't use (), so write bellow way-

const objPrint=()=> ({username:"Saradindu"}) //it will work, here use first () then {} for object
console.log(objPrint());
