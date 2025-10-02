//reduce

const mynum=[1,2,3,4]

const myTotal1= mynum.reduce( function(acc,currVal){
    console.log(`accumulator is ${acc} and currentvalue is ${currVal}`);
    return acc+currVal;
},0) //here 0 is initialValue, and accumulator is initially 0, and then "accumulator=accumulator+currentvalue" for every steps
console.log("myTotal1 is " + myTotal1);   //note: You must have to give initial value



console.log("------------------------------------------------");
//we can do it by using arrow function

const myTotal2=mynum.reduce( (acc,currVal)=> acc+currVal )
console.log("myTotal2 is " + myTotal2); //Here we are printing the value of accumulator only.
                                        //because this is only our need, everytime acc and currval is not recuired, 
                                        //this is only understanding purpose 




console.log("-------------------------------------------------------------------------");


const shoppingCart=[
    {
        name:"python course",
        price:2000
    },
     {
        name:"Full Stack course",
        price:4000
    },
     {
        name:"Data Science course",
        price:3000
    },
     {
        name:"Java course",
        price:1000
    }
]

//Now question is, we have to find the total price of all the courses?
//Then we have to use "reduce()"

const totalPrice=shoppingCart.reduce( (acc,items)=>{
    return acc + items.price
},0)            //Note: 0 is the initial value of accumulator, 
                // which value will be give here that will be the initial value of accumulator 
console.log("Total course price ",totalPrice);
