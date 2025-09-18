console.log(2>1);
console.log(2<1);

console.log("------------------------------")

console.log(null>0);
console.log(null==0);  // when we are going to check equality(==) or comparison(<><=>=)
                      // that time those both are different ,,
                     // The time of comparison=> null is trated as 0
console.log(null>=0);

console.log("------------------------------")

console.log(undefined>0);
console.log(undefined==0);  // in the case of undefined=> comparison(<><=>=) or equality(==)
                           // in both case it will give false 
console.log(undefined>=0);

console.log("------------------------------")


// === (Strictly check both value and datatype)
console.log("2"===2) // ans=false because datatype are not same
