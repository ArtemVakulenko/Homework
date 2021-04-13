//Циклы 1

function getSumOfEven (min, max){
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
    var check = true
    for(var i = 2; i < num; i++){
        if (num % i === 0){
        check = false;
        break
        }
    }
    
    if (check === true) {
        var res = 'число простое'
    }
    else{
        var res = 'число не простое'
    }
    return res
}

//Циклы 3 метод перебора

function getSqrtRandom (num){
    for (var i = 0; i <= num; i++){
        if (i * i == num){
            var res = i
        }
    }
    return res
}

//Циклы 3 метод бинарного подбора

function getSqrtBinary (num){
    var low = 0
    var mid = 0
    var high = num
    

}

//Циклы 4

function getFactorial (n){
    var res = 1
    for (var i = 1; i <= n; i++){
    res = res * i
    }
return res
}

//Циклы 5

function sumOfDigits (num){
    var res = 0
    var digitArray = []
    var numStr = num.toString()
    for(var i = 0; i < numStr.length; i++){
        digitArray[i] = numStr[i]
        digitArray[i] = +digitArray[i]
        res += digitArray[i]
    }
    return res
}

//Циклы 6

    function reverseNumber(num){
        var numStr = num.toString()
        var reversedNumber = []
        for (var i = 0; i < numStr.length; i++){
            reversedNumber[i] = numStr[numStr.length - i -1]
            reversedNumber[i] = +reversedNumber[i]
        }
        return reversedNumber
    }