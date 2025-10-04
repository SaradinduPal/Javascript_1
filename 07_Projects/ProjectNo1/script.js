const buttons=document.querySelectorAll('.button');
const body =document.querySelector('body');

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);  //by this "target", we can understand from where the event(e) is coming
        if (e.target.id==='grey') {
            body.style.backgroundColor=e.target.id  //or 'grey'
        }
        if (e.target.id==='white') {
            body.style.backgroundColor=e.target.id;  //or 'white'
        }
        if (e.target.id==='blue') {
            body.style.backgroundColor=e.target.id;  //or 'blue'
        }
        if (e.target.id==='yellow') {
            body.style.backgroundColor=e.target.id;  //or 'yellow'
        }
    })
})
