// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

function findEggsCookingtime(n){
    var res =  Math.ceil(n / 5) * 5;
    return res
}

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.
function findOddOrEven(array){
    var res
    var oddArray = []
    var evenArray = []
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            evenArray.push(array[i]) 
        }
        else{
            oddArray.push(array[i])
        }
    }
    if(oddArray.length === 1){
        res = oddArray[0]
    }
    if(evenArray.length === 1){
        res = evenArray[0]
    }
    return res
}

// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).



//  4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке

// 5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function getNextPalindrome(num){
    for (var i = num; i++;){
        var strNum = String(num)
        var check = isPalindrome(strNum)
        if(check === true){
            return i
        }
    }
}
function isPalindrome(str) {
    var reverseStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    if(str === reverseStr){
        return true
    }
    else {
        return false
    }
  }
console.log(isPalindrome('151'));
console.log(getNextPalindrome(146));