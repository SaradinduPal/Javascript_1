const promiseOne = new Promise((resolve, reject)=>{
        //Do an async task like-> DB calls, cryptography,network call
    setTimeout(()=>{
        console.log("Async task is complete");
        resolve()
    },2000)
}) 
promiseOne.then(()=>{
    console.log("Promise Consumed");
})

//-----------------------------------------------------------
//or without creating variable we can directly create promise and add then
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
    },2000)
}).then(()=>{
    console.log("Async 2 consumed")
})

//-----------------------------------------------------------
const promiseThree=new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve({username:"spal",email:"abc@gmail.com"}) //Here pass object as data as parameter
    },1000)
})
promiseThree.then((user)=>{ //Here take the object as an parameter
    console.log(user);
})

//-----------------------------------------------------------

const promiseFour = new Promise((resolve,reject)=>{
     let error=true
    if (!error) {
        resolve({username:"Saradindu",email:"sp@gmail.com"}) //Here pass object as data as parameter
    }else{
        reject("ERROR: Something Went Wrong")
    }
})
promiseFour.then((user)=>{ //Here take the object as an parameter
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected"); //This finally() block will always executed
})

//-----------------------------------------------------------


//Use Of "Async And Await" with "try-catch"
const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if (!error) {
            resolve({username:"JavaScript",Password:"1234"})
        }else{
            reject("ERROR: JS Went Wrong")
        }
    },1000)
})

async function promiseFiveConsumed(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
promiseFiveConsumed()



//-----------------------------------------------------------
new Promise((resolve,reject)=>{
    let error=true
    if (!error) {
        console.log("Hello1");
        resolve()
    }else{
        console.log("false")
        reject()
    }
}).then(()=>{
    console.log("hello consumed");
}).catch(()=>{
    console.log("false consumed");
}).finally(()=>{
    console.log("defalut finally");
})



//.json => it's convert the data from other from to string 