var minValue = document.querySelector(".inputMin")
var maxValue = document.querySelector(".inputMax")
var numOfTries = document.querySelector(".inputTries")
var validMsg = document.querySelector(".validationMessage")
var btnGenerate = document.querySelector(".generateButton")
var btnGuess = document.querySelector(".buttonGuess")
var userInput = document.querySelector(".userInput")
var ansMsg = document.querySelector(".text")
var inputSpace = document.querySelector(".input")
var gameSpace = document.querySelector(".game")
var exitButton = document.querySelector(".exitButton")
var numOfTriesMsg = document.querySelector(".Tries")


var min, max, tries, rand
var guesses = []
btnGenerate.addEventListener('click', setValues)
btnGuess.addEventListener('click', checkAns)

function setValues(){
    min = +minValue.value
    max = +maxValue.value
    tries = +numOfTries.value
    if(checkValidity(min, max, tries)){
        rand = Math.floor (Math.random() * (max - min + 1)) + min;
        console.log(rand);
        inputSpace.classList.add("hide")
        gameSpace.classList.remove("hide")
        numOfTriesMsg.innerHTML += ' ' + tries
    }else{
        validMsg.innerHTML = "Ваши значения не валидны"
    }
}

function checkValidity(min, max, tries){
    var checkMin, checkMax, checkTries, res
    if(min < 0 || min > 200 || min > max || isNaN(min)){
        checkMin = false
    }else{
        checkMin = true
    }
    if(max < 0 || max > 200  || isNaN(max)){
        checkMax = false
    }else{
        checkMax = true
    }
    if(tries < 0 || tries > 15 || isNaN(tries)){
        checkTries = false
    }else{
        checkTries = true
    }
    return (checkMin && checkMax && checkTries)
}
function checkAns (){
    var res
    var ans = +userInput.value
    guesses.push(ans)
    console.log(guesses)
    var ono = ans === rand
    if (ono){
       res = 'оно'
       btnGuess.setAttribute('disabled', 'true')
    }else {
        res  = 'не оно'
    }
    if (guesses.length > 1 && res !== 'оно' ){
        if ((rand - guesses[guesses.length - 1]) > (rand - guesses[guesses.length - 2])){
            res += ' холоднее'
        }else {
            res += ' теплее'
        }
    }
    
    tries--
    numOfTriesMsg.innerHTML = 'осталось попыток ' + tries
    if (tries === 0 && !ono){
        res = 'проиграл'
        btnGuess.setAttribute('disabled', 'true')
    }
    ansMsg.innerHTML = res
}

exitButton.onclick = function(){
    location.reload()
}