const score =400; //javascript automatically define that it is a number 
console.log(score);

const balance=new Number(100); // but here we are explictly saying that it's a number 
console.log(balance);          // it's better ;
console.log(balance.toString());
console.log(typeof balance.toString());

console.log(balance.toFixed(2));//(2) will give 2 decimal value after the number


const num=1234.8794;
console.log(num.toPrecision(4));

const hundred=1000000;
console.log(hundred.toLocaleString('en-IN'));

console.log("--------------------------------------------------------------------")


//#######################MATHS###############################

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.pow(4,3));
console.log(Math.min(1,3,4,2,5,0));
console.log(Math.max(1,3,4,2,5,0));

console.log(Math.random());
console.log(Math.floor(Math.random()*10));


//const min=10
//const max=20

//Formula=> (Math.random() * (max - min + 1)) + min 

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+10));

