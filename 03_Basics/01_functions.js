//Function
//add two numbers
function add(num1,num2){
    console.log(num1+num2);
}

add(4,3);
const result=add(4,4);
console.log(result);  //the value of result will give "undefined", because here we aren't return anything



//return value
function add2(num1,num2){
    return num1+num2;
}

const ans=add2(5,5);
console.log(ans);

// --------------------------------------------------------
function printUserName(userName){
    return `${userName} is logged in here`;
}

let usernam=printUserName("Saradindu")
console.log(usernam);
//----------------------------------------------------------

function printUserName(userName){
    if(userName===undefined){//instead of this (userName===undefined) use only (!userName)
        console.log("give a valid name")
        return
    }
    return `${userName} is logged in here`;
}
usernam=printUserName() 
console.log(usernam);


//when we don't know how many argument will be there that time we use (rest/spread) operator
//that will return the value in a bundil array format

function Many_Argument_Fxn(...num1){ //"...num1" is spread operator
    return num1
}
console.log(Many_Argument_Fxn(100,200,400,405,6,1223,45,)) //give all value in array bundil

// --------------------------------------------------

function Many_Argument_Fxn2(val1,val2,...num1){//here for return num1, ans will be[300,400,500]
    return num1                            //because val1 and val2 will get first two numbers
}
console.log(Many_Argument_Fxn2(100,200,300,400,500)); 


//----------------------------------------------------

//Object handling by Function

const user1={
    name:"Saradindu1",
    age:20
}

function handleObject(anyObjectName){
    console.log(`Name is ${anyObjectName.name} and age is ${anyObjectName.age}` );
}

handleObject(user1)


//we can declare object under the function call 
handleObject({
    age:25,
    name:"Rajib"  // here we declare "object" under the function call directly
})


//------------------------------------------------------------------
//Declare and get value of Array using function
const arr1=[100,200,300,400]
function ArrayHandle(GetArray){
    return GetArray[0];//all time return the first value of any given array
}

//Calling of a function
console.log(ArrayHandle(arr1));

console.log(ArrayHandle([40,50,60]));//here directly declare an array into the function calling
