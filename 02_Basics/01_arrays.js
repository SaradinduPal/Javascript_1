const arr1=[1,3,4,8,7,2]
const arr2=["spal","hero",1,3.5,0]  //those are the different ways of declearing arrays
const arr3=new Array("Hitesh","Raja",1,4,7);  // 

console.log(arr1[1]);
console.log(arr3[1]);

//Array Methods
arr1.push(10);
console.log(arr1);

arr1.pop() // remove the last element
console.log(arr1)

arr1.unshift(10);
arr1.shift(10);

console.log(arr1.includes(6))
console.log(arr1.indexOf(3))


console.log("---------------------------------")
const newArr=arr1.join() // it will convert the array into "string"
console.log(newArr);
console.log(typeof newArr);


console.log("----------------------------------");

//slice,splice

console.log("A", arr1);
const newArr2=arr1.slice(1,4);//4 is excluded ,, if we use "splice" then last number will be included
console.log(newArr2);
console.log("B", arr1);  // after slicing the main array remain same

//splice
console.log("splice----------------------------------");
console.log("C", arr1);
const newArr3=arr1.splice(1,4);//here 4 will be include, this is the main difference
console.log(newArr3);
console.log("D", arr1);  // atlast here orginal array "arr1" is also changed, 
                        // only the remaning elements those are not taken by the "splice"
                    //method, those not taken elements are stayed in orginal array at last