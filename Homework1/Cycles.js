//Циклы 1

function getSumOfEven (min = 0, max = 99){
    var sum = 0
    var count = 0
    for( var i = min; i <= max; i++){
        if (i % 2 ==0){
            sum += i
            count ++
        }
    }
    var ans = [sum, count]
    return ans
}
//Циклы 2

function checkIfPrime (num){
    if(num){
    var check = true
    for(var i = 2; i < num; i++){
        if (num % i === 0){
        check = false;
        break
        }
    }
    
    if (check === true) {
        var res = 'prime'
    }
    else{
        var res = 'not prime'
    }
    return res
}else return false
}

//Циклы 3 метод перебора

function getSqrtRandom (num){
    if(num){
    for (var i = 0; i <= num; i++){
        if (i * i == num){
            var res = i
        }
    }
    return res
}else return false
}

//Циклы 4

function getFactorial (num){
        if (num === 0){
            return 1
        }else {
            var res = 1
            for (var i = 1; i <= num; i++){
                res = res * i
                }
            return res
            }
}

//Циклы 5

function sumOfDigits (num){
    if(num && num > 0){
    var res = 0
    var digitArray = []
    var numStr = num.toString()
    for(var i = 0; i < numStr.length; i++){
        digitArray[i] = numStr[i]
        digitArray[i] = +digitArray[i]
        res += digitArray[i]
    }
    return res
}else return false
}

//Циклы 6

function reverseNumber(num){
    if(num){
    var numStr = num.toString()
    var reversedNumber = []
    for (var i = 0; i < numStr.length; i++){
        reversedNumber[i] = numStr[numStr.length - i - 1]
    }
    var res = +reversedNumber.join('')
    return res
}else return false
}

module.exports = {getSumOfEven, checkIfPrime, getSqrtRandom, getFactorial, sumOfDigits, reverseNumber}