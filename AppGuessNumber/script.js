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


var min, max, tries, rand;
var triesCount = 0
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
        numOfTriesMsg.innerHTML = 'Tries left: ' + tries
    }else{
        validMsg.innerHTML = "invalid inputs"
    }
}

function checkValidity(min, max, tries){
    var checkMin, checkMax, checkTries;
    if (min < 0 || min > 200 || min > max || isNaN(min)){
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
    triesCount++
    tries--
    var res
    var ans = +userInput.value
    guesses.push(ans)
    console.log(guesses)
    var ono = ans === rand
    if (ono){
       res = 'GOT IT!, you guessed my number in  ' + triesCount + ' tries' 
       btnGuess.setAttribute('disabled', 'true')
       numOfTriesMsg.innerHTML = ''
    }else {
        res  = 'Nope'
        numOfTriesMsg.innerHTML = 'Tries left: ' + tries
        if (guesses.length > 1){
            if ((rand - guesses[guesses.length - 1]) > (rand - guesses[guesses.length - 2])){
                res += ' colder'
            }else {
                res += ' hotter'
            }
        }
    }
    if (tries === 0 && !ono){
        res = 'LOSER'
        numOfTriesMsg.innerHTML = ''
        btnGuess.setAttribute('disabled', 'true')
    }
    ansMsg.innerHTML = res
}

exitButton.onclick = function(){
    location.reload()
}