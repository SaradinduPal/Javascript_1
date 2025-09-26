//"for of" loop

//["", "",""]  <=this is a array, and under this array there are string
//[{},{},{},{}] <=this is a array object,here under the array there are object

//"for of"

const arr1=[1,2,3,4,5]

for (const element of arr1) {
    // console.log(element);
}


//Doing this same thing with a "String"
const name="Saradindu Vai"

for (const element of name) {
    console.log(`Each Char is ${element}`);
}


console.log("---------------------------------------------------------------");

//Map (it's a object,contains values in key-value pair)(Contains Unique Values)

const map1= new Map();           //creation of a map
// map1.set('key',"values")

map1.set('In',"India")
map1.set('USA',"United states of America")
map1.set('Fr',"France")

console.log(map1);

//now we are trying to fetch values putting loops on this map

for (const element of map1) {
    // console.log(element); //in this way, all answer will come as a array format
}

//so that we have to do new syntax(bindu key and values in bracket)

for (const [key1,value] of map1) {
    console.log(key1 ,"=>",value);  //Here is acutally "destructuring" happens
}



console.log("------------------------------------------------------");



// for (const element of object) {
                    // "for-of" loop is not applicale for object,
                    //because it cannot iterate through the object,
                    //Here another loop will come to place
// }



// const user={
//     'name':"spal",
//     'age':20
// }
// for (const [key,value] of user) {
//     console.log(key,value);
// }  

//If we do this things with "user" object that time it will give that
//object is not iterable with "for-of" loop