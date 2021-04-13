function randomArrayGenerator(min, max, length){
    var array =[]
    for(var i = 0; i < length; i++){
        array[i] = Math.floor (Math.random() * (max - min + 1)) + min;
    }
    return array
}

//массивы 1 

function findMinElement (array){
    var minElement = array[0]
    for(var i = 0; i < array.length; i++){
        if (minElement > array[i]) {
            minElement = array[i]
        }
    }
    return minElement
}

//Массивы 2

function findMaxElement (array){
    var maxElement = array[0]
    for(var i = 0; i < array.length; i++){
        if (maxElement < array[i]) {
            maxElement = array[i]
        }
    }
    return maxElement
}

//Массивы 3

function findIndexOfMinElement (array){
    var indexOfMinElement = 0
    for(var i = 0; i < array.length; i++){
        if (array[i] < array[0]) {
            indexOfMinElement = i
        }
    }
    return indexOfMinElement
}

//Массивы 4

function findIndexOfMaxElement (array){
    var indexOfMaxElement = 0
    for(var i = 0; i < array.length; i++){
        if (array[i] > array[0]) {
            indexOfMaxElement = i
        }
    }
    return indexOfMaxElement
}

//Массивы 5

function sumOfOddElements (array){
    var sum = 0
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 !== 0){
        sum += array[i]
        }
    }
    return sum
}

//Массивы 6

function reversedArray(array){
    var reversedArray = []
    for (var i = 0; i < array.length; i++){
        reversedArray[i] = array[array.length - i - 1]
    }
    return reversedArray
}

//Массивы 7

function numOfOddElements (array){
    var num = 0
    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            num++
        }
    }
    return num
}

//Массивы 8

    function swapHalvesOfArray (array){
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
}

//Массивы 9 bubbleSort

function bubbleSort(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

//Массивы 9 selectionSort

function selectionSort(array) { 
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
}

//Массивы 9 insertionSort

function insertionSort(array) {
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
}