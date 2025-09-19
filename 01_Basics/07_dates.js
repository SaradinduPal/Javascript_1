//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

console.log("-------------------------------------------------------")

let myDate2= new Date("01-01-2020")
console.log(myDate2.toLocaleString());


let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myDate2.getTime());
console.log(Date.now());//it will give the real time in milisecond
console.log(Date.now()/1000);//it will give the real time in second with decimal value
console.log(Math.floor(Date.now()/1000));//it will give the real time in second without decimal value


console.log("-------------------------------------------------------")

let nowDate=new Date();
console.log(nowDate.getDate());
console.log(nowDate.getDay());
console.log(nowDate.getMonth());//for month indexing start with 0, means january=0 and so on.

nowDate.toLocaleString('default',{
    weekday:"long"
})

