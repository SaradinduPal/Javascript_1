//we see that "for-of" loop is fail to print the value of object,means 
//"for-of" loop is not working for object

//That time for printing all values of object loopwise we are using 
// "for-in" loop

//"for-in" loop

const user={
    js:"javascript",
    cpp:"c++",
    py:"python"
}

for (const key in user) {
    // console.log(key); it will print only key
    console.log(`${key} and values are ${user[key]}`);
}


console.log("-----------------------------------------------------");

//"for-in" loop for "Array"
const arr=["cpp","java","c","js"]
for (const key in arr) {
    // console.log(key); in case of array, only key printing will give the index value
    console.log(`${arr[key]}`);

}

//But remember "for-in" is not workable for map(), because map() is not iterable
