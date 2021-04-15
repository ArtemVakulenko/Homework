var {getSumOfEven} = require ('./Cycles.js')
var {checkIfPrime} = require ('./Cycles.js')
var {getSqrtRandom} = require ('./Cycles.js')
var {getFactorial} = require ('./Cycles.js')
var {sumOfDigits} = require ('./Cycles.js')
var {reverseNumber} = require ('./Cycles.js')

describe('getSumOfEven', function(){
    it('should be defined', function(){
        expect(getSumOfEven).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof getSumOfEven).toBe('function')
    })
    it('should work without arguments', function(){
        expect(getSumOfEven()).toStrictEqual([2450, 50])
    })
    it('should return array', function(){
        expect(typeof getSumOfEven()).toBe("object")
        expect(typeof getSumOfEven(1, 14)).toBe("object")
    })
    it('should work correctly', function(){
        expect(getSumOfEven(0, 10)).toStrictEqual([30, 6])
    })
})
describe('checkIfPrime', function(){
    it('should be defined', function(){
        expect(checkIfPrime).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof checkIfPrime).toBe('function')
    })
    it('should not work without arguments', function(){
        expect(checkIfPrime()).toBe(false)
    })
    it('should work correctly with primes', function(){
        expect(checkIfPrime(7)).toBe("prime")
        expect(checkIfPrime(7)).not.toBe("not prime")
        expect(checkIfPrime(7)).not.toBe(false)
    })
    it('should work correctly with non-primes', function(){
        expect(checkIfPrime(8)).toBe("not prime")
        expect(checkIfPrime(8)).not.toBe("prime")
        expect(checkIfPrime(8)).not.toBe(false)
    })
})
describe('getSqrtRandom', function(){
    it('should be defined', function(){
        expect(getSqrtRandom).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof getSqrtRandom).toBe('function')
    })
    it('should not work without arguments', function(){
        expect(getSqrtRandom()).toBe(false)
    })
    it('should work correctly', function(){
        expect(getSqrtRandom(25)).toBe(5)
    })
})
describe('getFactorial', function(){
    it('should be defined', function(){
        expect(getFactorial).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof getFactorial).toBe('function')
    })
    it('should work correctly with 0 ', function(){
        expect(getFactorial(0)).toBe(1)
    })
    it('should work correctly with 1 ', function(){
        expect(getFactorial(1)).toBe(1)
    })
    it('should work correctly', function(){
        expect(getFactorial(5)).toBe(120)
    })
})
describe('sumOfDigits', function(){
    it('should be defined', function(){
        expect(sumOfDigits).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof sumOfDigits).toBe('function')
    })
    it('should not work without arguments', function(){
        expect(sumOfDigits()).toBe(false)
    })
    it('should not work with negative numbers', function(){
        expect(sumOfDigits(-5)).toBe(false)
    })
    it('should work with one-digit number', function(){
        expect(sumOfDigits(5)).toBe(5)
    })
    it('should work with any number', function(){
        expect(sumOfDigits(15)).toBe(6)
        expect(sumOfDigits(123)).toBe(6)
        expect(sumOfDigits(1234)).toBe(10)
    })
})
describe('reverseNumber', function(){
    it('should be defined', function(){
        expect(reverseNumber).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof reverseNumber).toBe('function')
    })
    it('should not work without arguments', function(){
        expect(reverseNumber()).toBe(false)
    })
    it('should work with one-digit number', function(){
        expect(reverseNumber(5)).toBe(5)
    })
    it('should work with even-digit number', function(){
        expect(reverseNumber(5432)).toBe(2345)
    })
    it('should work with odd-digit number', function(){
        expect(reverseNumber(54321)).toBe(12345)
    })
})