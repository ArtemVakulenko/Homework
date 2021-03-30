var minValue = document.querySelector('.inputMin')
var maxValue = document.querySelector('.inputMax')
var generateButton = document.querySelector('.generateButton')
var resultStr = document.querySelector('.result')
var resetButton = document.querySelector('.resetButton')

var min, max
var sequence = []

generateButton.onclick = function(){
    min = minValue.value
    max = maxValue.value
}


//тестовые скрипты
var min = 10
var max = 26
var length = max - min + 1
var nums = []
var randIndex =  Math.floor (Math.random() * (length));
//создание массива всех вариантов
for(var i = min; i <= max; i++){
    nums[i - min]= i
}
//перемешивание вариантов
function shuffle(array){
	var randIndex, tempElement;
	for(var i = array.length - 1; i > 0; i--){
		randIndex = Math.floor(Math.random()*(i + 1));
		tempElement = array[randIndex];
		array[randIndex] = array[i];
		array[i] = tempElement;
	}
	return array;
}
//добавление перемешанных вариантов по одному в новый массив
function revealSequence (array){
    var sequence = []
    for (var i = 0; i < array.length; i++){
        sequence[i] = nums[i] 
    }
    return sequence
}
console.log(nums);
console.log(shuffle(nums));
console.log(revealSequence(nums));