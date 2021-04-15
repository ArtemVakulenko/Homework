function randomArrayGenerator(min, max, length){
    var array =[]
    for(var i = 0; i < length; i++){
        array[i] = Math.floor (Math.random() * (max - min + 1)) + min;
    }
    return array
}

//массивы 1 

function findMinElement (array){
    if(Array.isArray(array)){
        var minElement = array[0]
        for(var i = 0; i < array.length; i++){
            if (minElement > array[i]) {
                minElement = array[i]
            }
        }
        return minElement
    }else return false
}

//Массивы 2

function findMaxElement (array){
    if(Array.isArray(array)){
        var maxElement = array[0]
        for(var i = 0; i < array.length; i++){
            if (maxElement < array[i]) {
                maxElement = array[i]
            }
        }
        return maxElement
    }else return false
}

//Массивы 3

function findIndexOfMinElement (array){
    if(Array.isArray(array)){
    var indexOfMinElement = 0
    for(var i = 0; i < array.length; i++){
        if (array[i] < array[0]) {
            indexOfMinElement = i
        }
    }
    return indexOfMinElement
}else return false
}

//Массивы 4

function findIndexOfMaxElement (array){
    if(Array.isArray(array)){
    var indexOfMaxElement = 0
    for(var i = 0; i < array.length; i++){
        if (array[i] > array[0]) {
            indexOfMaxElement = i
        }
    }
    return indexOfMaxElement
}else return false
}

//Массивы 5

function sumOfOddElements (array){
    if(Array.isArray(array)){
    var sum = 0
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
        sum += array[i]
        }
    }
    return sum
}else return false
}

//Массивы 6

function reversedArray(array){
    if(Array.isArray(array)){
    var reversedArray = []
    for (var i = 0; i < array.length; i++){
        reversedArray[i] = array[array.length - i - 1]
    }
    return reversedArray
}else return false
}

//Массивы 7

function numOfOddElements (array){
    if(Array.isArray(array)){
    var num = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            num++
        }
    }
    return num
}else return false
}

//Массивы 8

function swapHalvesOfArray (array){
    if(Array.isArray(array)){
    var swapArray = []
	var i2 = (array.length / 2) ;
	
	for (var i = 0; i < array.length; i++){
		if (i < i2){
		swapArray[(array.length/2)+ i ] = array[i]
	}
	
		else {
			swapArray[ i-(array.length/2) ] = array[i]
		}
	}
    return swapArray
}else return false
}

//Массивы 9 bubbleSort

function bubbleSort(array) {
    if(Array.isArray(array)){
    for (var i = 0, endI = array.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j] > array[j + 1]) {
                var swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}else return false
}

//Массивы 9 selectionSort

function selectionSort(array) { 
    if(Array.isArray(array)){
    for(let i = 0; i < array.length; i++) {
        var min = i;
        for(var j = i+1; j < array.length; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             var tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array;
}else return false
}

//Массивы 9 insertionSort

function insertionSort(array) {
    if(Array.isArray(array)){
        for (var i = 1; i < array.length; i++) {
            var currentElement = array[i];
            var j = i-1; 
            while ((j > -1) && (currentElement < array[j])) {
                array[j+1] = array[j];
                j--;
            }
            array[j+1] = currentElement;
        }
    return array;
    }else return false
}

module.exports = {findMinElement, findMaxElement, findIndexOfMinElement, findIndexOfMaxElement, sumOfOddElements, reversedArray, numOfOddElements, swapHalvesOfArray, bubbleSort, selectionSort,insertionSort }