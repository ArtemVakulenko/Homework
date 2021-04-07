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


var min, max, tries, rand, ans
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
    if(min < 0 || min > 200 || min > max || typeof min !== 'number'){
        checkMin = false
    }else{
        checkMin = true
    }
    if(max < 0 || max > 200 || typeof max !== 'number'){
        checkMax = false
    }else{
        checkMax = true
    }
    if(tries < 0 || tries > 15 || typeof tries !== 'number'){
        checkTries = false
    }else{
        checkTries = true
    }
    if (checkMin && checkMax && checkTries){
        res = true
    }else {
        res = false
    }
    return res
}
function checkAns (){
    var res
    guesses.push(ans)
    var guessesCount = guesses.length
     ans = +userInput.value
     if (ans === rand){
       res = 'оно'
       btnGuess.setAttribute('disabled', 'true')
    }else {
        res  = 'не оно'
    }
    if (guessesCount > 1 && res !== 'оно' ){
        if ((rand - guesses[guessesCount - 1]) > (rand - guesses[guessesCount - 2])){
            res += ' холоднее'
        }else {
            res += ' теплее'
        }
    }
    ansMsg.innerHTML = res
    tries--
    numOfTriesMsg.innerHTML = 'осталось попыток ' + tries
    if (tries === 0){
        ansMsg.innerHTML = 'проиграл'
        btnGuess.setAttribute('disabled', 'true')
    }
}
// btnGenerate.onclick = function(){
//     min = +minValue.value
//     max = +maxValue.value
//     tries = +numOfTries.value
//     rand = Math.floor (Math.random() * (max - min + 1)) + min;
//     console.log(rand);
//     inputSpace.style.display = "none"
//     gameSpace.style.display = "block"
//     if(min < 1 || min > 200 || max < 1 || max > 200 || min >= max || tries < 1 || tries > 15){
//         validMsg.innerHTML = "Ваши значения не валидны"
//     }
//     numOfTriesMsg.innerHTML = tries
// }

// btnUser.onclick = function(){
//     var res
//     guesses.push(ans)
//     var guessesCount = guesses.length
//      ans = +userInput.value
//      if (ans === rand){
//        res = 'оно'
//     }else {
//         res  = 'не оно'
//     }
//     if (guessesCount > 1 && res !== 'оно' ){
//         if ((rand - guesses[guessesCount - 1]) > (rand - guesses[guessesCount - 2])){
//             res += ' холоднее'
//         }else {
//             res += ' теплее'
//         }
//     }
//     ansMsg.innerHTML = res
//     tries--
//     numOfTriesMsg.innerHTML = tries
//     if (tries === 0){
//         ansMsg.innerHTML = 'не смог'
//     }
// }

exitButton.onclick = function(){
    location.reload()
}