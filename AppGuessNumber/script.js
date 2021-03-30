var minValue = document.querySelector(".inputMin")
var maxValue = document.querySelector(".inputMax")
var numOfTries = document.querySelector(".inputTries")
var validMsg = document.querySelector(".validationMessage")
var btnGenerate = document.querySelector(".generateButton")
var btnUser = document.querySelector(".userButton")
var userInput = document.querySelector(".userInput")
var ansMsg = document.querySelector(".text")
var inputSpace = document.querySelector(".input")
var gameSpace = document.querySelector(".game")
var exitButton = document.querySelector("exitButton")


var min, max, tries, rand, ans
var guesses = []

btnGenerate.onclick = function(){
    min = +minValue.value
    max = +maxValue.value
    tries = +numOfTries.value
    rand = Math.floor (Math.random() * (max - min + 1)) + min;
    inputSpace.style.display = "none"
    gameSpace.style.display = "block"
    if(min < 1 || min > 200 || max < 1 || max > 200 || min >= max || tries < 1 || tries > 15){
        validMsg.innerHTML = "Ваши значения не валидны"

    }
}

btnUser.onclick = function(){
    var res
    guesses.push(ans)
    var guessesCount = guesses.length
     ans = +userInput.value
     console.log(ansMsg);
     if (ans === rand){
       res = 'оно'
    }else {
        res  = ' ne ono'
    }

    if (guessesCount > 1 && res !== 'оно' ){
        if ((rand - guesses[guessesCount - 1]) > (rand - guesses[guessesCount - 2])){
            res += ' холоднее'
        }else {
            res += ' теплее'
        }
    }
    ansMsg.innerHTML = res
}

exitButton.onclick = function(){
    window.location.reload()
}