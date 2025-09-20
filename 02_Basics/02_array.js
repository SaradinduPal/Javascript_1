const arr1=["ram","sham","jadhu"]
const arr2=["rohit","sumit","santanu"]

arr1.push(arr2)
console.log(arr1); // it will merge but full array2 will take as a single element , 
                    // here array under array will be created

// console.log(arr1[3][1]);


console.log("--------------------------");


const arr3=["ram","sham","jadhu"]
const arr4=["rohit","sumit","santanu"]


const newArr=arr3.concat(arr4); //create a new array but taking all the elements as in one array
console.log(newArr);

//inestead of concate we can use spred operator[both works same]

//Spread operator => [...arr1, ...arr2 ], it will done automatically mixed all in one array.
const new_Array_Spread=[...arr3, ...arr4];
console.log(new_Array_Spread);



console.log("flat operator--------------------------");
//flat operator
//this is also used for add all the arrays
const flat_arr=[1,2,3,[4,5],6,[3,4,5,[5,6]]]
console.log(flat_arr.flat(Infinity));


console.log("--------------------------");
console.log(Array.isArray("Saradindu"));//check my given value is array or not
console.log(Array.from("Saradindu"));//convert the string into array

console.log(Array.from({name:"Saradindu"}));//important***


let a1=100;
let a2=200;
let a3=300;
console.log(Array.of(a1,a2,a3)); //add and make array for all the different variables

