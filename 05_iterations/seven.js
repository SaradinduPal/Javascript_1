//Map (suppose I want to add 10 with each number of this array, that time use "Map")

const myNumber=[1,2,3,4,5,6,7,8,9,10]
const answer= myNumber.map( (num)=> num+10 )
console.log(answer);

//OR If I write this using "curly bracket" then I have to write "return" keyword
const answer2=myNumber.map( (num)=>{
    return num+10  //Both are Same but syntax are little changed
} )
// console.log(answer2);


console.log("-------------------------------------------------------------------------");




//Chaining  (we can write many method one beside another) 
// Example : 
// const chain=myNumber.map( ()=>{}).map( ).filter( ) //we can write in this ways
//Note: After the complition of one method, the new value will go to the next method not the old values

const newChain=myNumber
                    .map( (num)=>num*10)
                    .map( (num)=>num+1)
                    .filter( (num)=>num>=40)
 
console.log(newChain);
