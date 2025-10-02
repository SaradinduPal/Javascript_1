const coding=["java","python","c","c++","Ruby"]

// const values=coding.forEach( (items)=> {
//     console.log(items);
//     return items;
// });

// console.log(values);

//what I will do,every time it will show "undefined" becaues for-each loop is not return any value
//if it's not returning any values that time we can't do any operation on array by using this loop


console.log("----------------------------------------------------------------");


//So then use "filter" to solve this problem
const mynum=[1,2,3,4,5,6,7,8,9,10]
const newNums=mynum.filter( (num)=>{ //instead of "for-each" we are using "filter"
    return num > 4
} )         //if you don't write "return" word then you can do directly but then don't write curly bracket
console.log(newNums);

const newNums2=mynum.filter( (num)=>
        num > 4
 )
console.log(newNums2) 



console.log("----------------------------------------------------------------");


//if we want to do this same thing using "for-each" loop then we have to use if() conditions
const newArr=[]
const value2=mynum.forEach( (num)=>{
    if (num>4) {
        newArr.push(num)
    }
} )
console.log(newArr);  //both are working as same as, you can use one of them (for-each or filter)

console.log("----------------------------------------------------------------");
