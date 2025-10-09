//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor());
    let intervalId; //Globally declared this variable because outside of "startChangingColor", we also use this variable another times
const startChangingColor=function(){
    if (intervalId==null) {  //this line is optional, remember if you give this line you have to add the previous 25no line,
        intervalId = setInterval(changeBgColor,1000)
    }

    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }

}
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null  //this line is optional, remember if you give this line you have to add the previous 14no line condition
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)