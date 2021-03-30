// 1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

function findCookingtime(n){
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
    if(oddArray.length < evenArray.length){
        res = oddArray[0]
    }
    else{
        res = evenArray[0]
    }
    return res
}

// 3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).