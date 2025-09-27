//"for-each" loop

//example with Array

const coding=["java","C","C++","Python","Go","JavaScript"]
coding.forEach(function(elements){   //Here the function is a callback function,
    console.log(elements);         //and we know callback function has no name.
})


console.log("---------------------------------------------------------");


//Or you can use simple arrow function instead of normal function 
coding.forEach( (item)=> {
    console.log(item);
})



console.log("---------------------------------------------------------");

//Here we can give a "function" directly as a parameter of "for-each" loop
//function example
function printMe(item){
    console.log(item);
}
//for-each loop(here function will go as a parameter)(note: function will declare as a reference)
coding.forEach(printMe)  //Note here "printMe()" will not be there only "printMe",only reference 


console.log("-------------------------------------------------------------------");


//Here in the "for-each" loop there are more than one parameter
//We can know about the "item", "index" value, and can also print the "full list"

coding.forEach( (item,index,list)=>{
    console.log(item,index,list);
} )


console.log("-------------------------------------------------------------------");




//"for-each" loop many times use for array objects
//  [{},{},{},{}]

const codingLang=[
    {
        langName:"Java",
        langFileName:".java"
    },
    {
        langName:"C++",
        langFileName:".cpp"
    },
    {
        langName:"JavaScript",
        langFileName:".js"
    }
]

codingLang.forEach( (item)=>{
    console.log(item.langName);
} )
//here we directly acess any propertise's value from an array-object 
