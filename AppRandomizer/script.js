var minValue = document.querySelector('.inputMin')
var maxValue = document.querySelector('.inputMax')
var generateButtonFirst = document.querySelector('.generateButtonFirst')
var generateButtonSecond = document.querySelector('.generateButtonSecond')
var resultStr = document.querySelector('.resultMsg')
var resetButton = document.querySelector('.resetButton')
var validationMsg = document.querySelector('.validationMessage')
var endMsg = document.querySelector('.endMessage')
var min, max, length
var count = 0
var sequence = []
generateButtonFirst.addEventListener('click', setSequence)
generateButtonSecond.addEventListener('click', revealSequence)
resetButton.addEventListener('click', reset)

function setSequence(){ //создание массива всех вариантов и показ первого
    min = +minValue.value
    max = +maxValue.value
    length = max - min + 1
    if(validateNums(min, max)){
        for(var i = min; i <= max; i++){
            sequence[i - min]= i 
        }
        shuffle(sequence)
        console.log(sequence)
        resultStr.innerHTML = 'Generated sequence is ' + sequence[0]
        count++
        generateButtonFirst.classList.add('hide')
        generateButtonSecond.classList.remove('hide')
        validationMsg.innerHTML = ''
    }
    else validationMsg.innerHTML = 'Invalid inputs'
}
function validateNums(min, max){
    if (min < 0 || min > 100000 || min > max || isNaN(min)){
        checkMin = false
    }else{
        checkMin = true
    }
    if(max < 0 || max > 100000  || isNaN(max)){
        checkMax = false
    }else{
        checkMax = true
}
return (checkMin && checkMax)
}
function shuffle(array){ //перемешивание вариантов
	var randIndex =  Math.floor (Math.random() * (length))
    var tempElement;
	for(var i = array.length - 1; i > 0; i--){
		randIndex = Math.floor(Math.random()*(i + 1));
		tempElement = array[randIndex];
		array[randIndex] = array[i];
		array[i] = tempElement;
	}
	return array;
}

function revealSequence (){//добавление перемешанных вариантов по одному в новый массив
    resultStr.innerHTML += ' ' + sequence[count]
    count++
    if (count === sequence.length){
        endMsg.innerHTML = 'All number have been displayed'
        generateButtonSecond.setAttribute('disabled','true')
    }

}

function reset (){
    location.reload()
}