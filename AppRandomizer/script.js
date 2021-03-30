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

// var nums = min - max

// for(var i = )




// var min = 10
// var max = 26
// var length = max - min + 1
// var nums = []
// for(var i = min; i <= max; i++){
//     nums[i - 1]= i
// }
// console.log(nums);
// console.log(nums.length);
// console.log(length);