
//Singleton Object
const userName=new Object();  // both are same, diffrence is singleton or non-singleton

//Non-Singleton Object(general decleration)
const user={ 
    id:"1234",
    email:"aaa@gmail.com",
    age:20
};

console.log(userName);
console.log(user);


console.log("------------------------");

const regularUser={
    email:"abbb@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Saradindu", //object under object under objects ,
            lastname:"Vai"          // it's called "NESTED OBJECT"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName);
console.log(regularUser.fullname.userFullName.firstname);


console.log("---------------------------------------------");

//ADD two or more Objects together

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={
    5:"e",
    6:"f"
}

const AddAnswer=Object.assign(obj1,obj2,obj3); // all add here by using this "Object.assign" method
console.log(AddAnswer);
//Or
const AddAnswer2=Object.assign({} ,obj1,obj2,obj3); //this both are same,difference is that, 
console.log(AddAnswer2);                            //all the values are going into this "{}" bracket 

console.log("Spread-------------------------------");
//Or we can simply use "Spread Operator"
//This is simply add all the objects by "... objName"
const Spread_Op={...obj1, ...obj2, ...obj3}
console.log(Spread_Op);

console.log("-------------------------------");
console.log(Object.keys(user));   //keys, values are the objects, but in output it's showing as Array
console.log(Object.values(user));
console.log(Object.entries(user));//makes key-value pair in array form, individually for all 

console.log(user.hasOwnProperty('age'));


//when we do production level works that time from database we are getting 
//"array-objects" ,, for data retrive
//It's looks like
const arrObj1=[
    {},
    {},
    {},
];              //means here lots of objects {} are into the array.

