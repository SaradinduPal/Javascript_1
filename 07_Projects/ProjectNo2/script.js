const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()    //It will stops the automatically page load.
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')
    const showMsg=document.querySelector('#showMsg')

    if (height==='' || height<0 ||isNaN(height)) {  // isNaN(height) means= Is there any other character ?
        result.innerHTML="please give valid height"
    }
    else if (weight==='' || weight<0 ||isNaN(weight)) {  // isNaN(weight) means= Is there any other character ?
        result.innerHTML="please give valid weight"
    }
    else{
       const bmi = (weight / ((height * height) /10000)).toFixed(2);
       //Show the result
       result.innerHTML=`${bmi}`

        if (bmi<18.6) {
        showMsg.innerHTML="You are Under Weight"
        }else if(bmi >= 18.6 && bmi <= 24.9){
        showMsg.innerHTML="You are Normal Weight"
        }else{
        showMsg.innerHTML="You are Over Weight"
        }

    }
})