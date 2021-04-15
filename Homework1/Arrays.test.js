var {findMinElement} = require ('./Arrays.js')
var {findMaxElement} = require ('./Arrays.js')
var {findIndexOfMinElement} = require ('./Arrays.js')
var {findIndexOfMaxElement} = require ('./Arrays.js')
var {sumOfOddElements} = require ('./Arrays.js')
var {reversedArray} = require ('./Arrays.js')
var {numOfOddElements} = require ('./Arrays.js')
var {swapHalvesOfArray} = require ('./Arrays.js')
var {bubbleSort} = require ('./Arrays.js')
var {selectionSort} = require ('./Arrays.js')
var {insertionSort} = require ('./Arrays.js')

describe('findMinElement', function(){
    it('should be defined', function(){
        expect(findMinElement).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof findMinElement).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(findMinElement(1)).toBe(false)
        expect(typeof findMinElement(1)).not.toBe('number')
    })
    it('should return min element correctly', function(){
        var array = [1, 2, 3, 4, 5, 6, 7, 0, -10]
        expect(findMinElement(array)).toBe(-10)
    })
})
describe('findMaxElement', function(){
    it('should be defined', function(){
        expect(findMaxElement).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof findMaxElement).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(findMaxElement(1)).toBe(false)
        expect(typeof findMaxElement(1)).not.toBe('number')
    })
    it('should return max element correctly', function(){
        var array = [1, 2, 3, 4, 5, 6, 7, 0, -10]
        expect(findMaxElement(array)).toBe(7)
    })
})
describe('findIndexOfMinElement', function(){
    it('should be defined', function(){
        expect(findIndexOfMinElement).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof findIndexOfMinElement).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(findIndexOfMinElement(1)).toBe(false)
        expect(typeof findIndexOfMinElement(1)).not.toBe('number')
    })
    it('should return index of min element correctly', function(){
        var array = [1, 2, 3, 4, 5, 6, 7, 0, -10]
        expect(findIndexOfMinElement(array)).toBe(8)
    })
})
describe('findIndexOfMaxElement', function(){
    it('should be defined', function(){
        expect(findIndexOfMaxElement).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof findIndexOfMaxElement).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(findIndexOfMaxElement(1)).toBe(false)
        expect(typeof findIndexOfMaxElement(1)).not.toBe('number')
    })
    it('should return index of max element correctly', function(){
        var array = [1, 2, 3, 4, 5, 6, 7, 0, -10]
        expect(findIndexOfMaxElement(array)).toBe(6)
    })
})
describe('sumOfOddElements', function(){
    it('should be defined', function(){
        expect(sumOfOddElements).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof sumOfOddElements).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(sumOfOddElements(1)).toBe(false)
        expect(typeof sumOfOddElements(1)).not.toBe('number')
    })
    it('should return 0 if array is empty', function(){
        expect(sumOfOddElements([])).toBe(0)
    })
    it('should return 0 if array consists only of even nums', function(){
        expect(sumOfOddElements([2, 4, 6, 8,])).toBe(0)
    })
    it('should return sum of odd elemets only', function(){
        expect(sumOfOddElements([2, 4, 6, 8, 1, 3, 5, 7])).toBe(16)
    })
})
describe('reversedArray', function(){
    it('should be defined', function(){
        expect(reversedArray).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof reversedArray).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(reversedArray(1)).toBe(false)
        expect(typeof reversedArray(1)).not.toBe('number')
    })
    it('should return array', function(){
        expect(typeof reversedArray([1, 2, 3, 4, 5])).toBe("object")
    })
    it('should work with array with odd length', function(){
        expect(reversedArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1])
    })
    it('should work with array with even length', function(){
        expect(reversedArray([1, 2, 3, 4,])).toStrictEqual([4, 3, 2, 1])
    })
})
describe('numOfOddElements', function(){
    it('should be defined', function(){
        expect(numOfOddElements).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof numOfOddElements).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(numOfOddElements(1)).toBe(false)
        expect(typeof numOfOddElements(1)).not.toBe('number')
    })
    it('should return number', function(){
        expect(typeof numOfOddElements([1, 2, 3, 4, 5])).toBe("number")
    })
    it('should return 0 if array is only even nums', function(){
        expect(numOfOddElements([2, 4, 6, 8,])).toBe(0)
    })
    it('should work correctly', function(){
        expect(numOfOddElements([2, 4, 6, 8, 1, 3, 5, 7, ])).toBe(4)
    })
})
describe('swapHalvesOfArray', function(){
    it('should be defined', function(){
        expect(swapHalvesOfArray).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof swapHalvesOfArray).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(swapHalvesOfArray(1)).toBe(false)
        expect(typeof swapHalvesOfArray(1)).not.toBe('number')
    })
    it('should return array', function(){
        expect(typeof swapHalvesOfArray([1, 2, 3, 4, 5])).toBe("object")
    })
    it('should work array which length is even', function(){
        expect(swapHalvesOfArray([1, 2, 3, 4,])).toStrictEqual([3, 4, 1, 2,])
    })
    // it('should work array which length is odd', function(){
    //     expect(swapHalvesOfArray([1, 2, 3, 4, 5])).toStrictEqual([4, 5, 3, 1, 2])
    // })
})
describe('bubbleSort', function(){
    it('should be defined', function(){
        expect(bubbleSort).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof bubbleSort).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(bubbleSort(1)).toBe(false)
        expect(typeof bubbleSort(1)).not.toBe('number')
    })
    it('should return array', function(){
        expect(typeof bubbleSort([1, 2, 3, 4, 5])).toBe("object")
    })
    it('should sort', function(){
        expect(bubbleSort([1, 3, 2, 4,])).toStrictEqual([1, 2, 3, 4,])
    })
})
describe('selectionSort', function(){
    it('should be defined', function(){
        expect(selectionSort).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof selectionSort).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(selectionSort(1)).toBe(false)
        expect(typeof selectionSort(1)).not.toBe('number')
    })
    it('should return array', function(){
        expect(typeof selectionSort([1, 2, 3, 4, 5])).toBe("object")
    })
    it('should sort', function(){
        expect(selectionSort([1, 3, 2, 4,])).toStrictEqual([1, 2, 3, 4,])
    })
})
describe('insertionSort', function(){
    it('should be defined', function(){
        expect(insertionSort).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof insertionSort).toBe('function')
    })
    it('should work only with arrays', function(){
        expect(insertionSort(1)).toBe(false)
        expect(typeof insertionSort(1)).not.toBe('number')
    })
    it('should return array', function(){
        expect(typeof insertionSort([1, 2, 3, 4, 5])).toBe("object")
    })
    it('should sort', function(){
        expect(insertionSort([1, 3, 2, 4,])).toStrictEqual([1, 2, 3, 4,])
    })
})