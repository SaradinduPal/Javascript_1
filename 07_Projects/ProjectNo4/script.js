let randomNumber= (parseInt(Math.random()*100+1))

const userInput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let preGuess= []  //it will shows which values are choosen by the user previously

let numGuess=1
let playGame=true

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess=parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}

function validateGuess(guess){ //it checks the given input is valid or not
    if (isNaN(guess)) {
        alert('Please Enter A Valid Number')
    } else if(guess<1){
         alert('Please Enter A Number greater than 1')
    }
     else if(guess>100){
         alert('Please Enter A Number lesser than 100')
    }else{
        preGuess.push(guess)
        if (numGuess>=10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){ ////it checks the given input is to high or low or correct
    if (guess===randomNumber) {
        displayMessage('Your gessed it right')
        endGame()
    }else if(guess < randomNumber){
         displayMessage('Number is too Low')
    }else if(guess > randomNumber){
         displayMessage('Number is too High')
    }
}

function displayGuess(guess){
    //it will re-empty(clean up) the input field for the next guess and update the array 
    userInput.value=''
    guessSlot.innerHTML +=` ${guess} ,`
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    //all the DOM manupulation will happen here and print the message
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()

}

function newGame(){ //here we reset everythings for new game
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(){
        randomNumber= (parseInt(Math.random()*100+1))
        preGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true

    })
}

