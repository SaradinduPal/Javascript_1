
//using async-await (try-catch)
async function getAllUsers() {

    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const ans = await response.json()
        console.log(ans);
    } catch (error) {
        console.log("E:",error);
    }
}
getAllUsers()

// ---------------------------------------------------------

//Using "then and catch"
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})