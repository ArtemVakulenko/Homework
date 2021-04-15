var {numToDay} = require ('./Functions.js')
var {distanceDecart} = require ('./Functions.js')
var {numberToString} = require ('./Functions.js')
var {days} = require ('./Functions.js')
var {wordsHundreds} = require ('./Functions.js')
var {wordsTens} = require ('./Functions.js')
var {wordsOnes} = require ('./Functions.js')
var {wordsTenToTwenty} = require ('./Functions.js')
var {hundreds} = require ('./Functions.js')
var {tens} = require ('./Functions.js')
var {tenToTwenty} = require ('./Functions.js')
var {ones} = require ('./Functions.js')

describe('numToDay', function(){
    it('should be defined', function(){
        expect(numToDay).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof numToDay).toBe('function')
    })
    it('should not work with invalind arguments', function(){
        expect(numToDay(0)).toBe(false)
        expect(numToDay(8)).toBe(false)
        expect(numToDay(-1)).toBe(false)
    })
    it('should return string', function(){
        expect(typeof numToDay(2)).toBe("string")
    })
    it('should return correct answer', function(){
        expect(numToDay(2)).toBe("вторник")
        expect(numToDay(3)).toBe("среда")
        expect(numToDay(1)).toBe("понедельник")
        expect(numToDay(7)).toBe("воскресенье")
    })
})
describe('distanceDecart', function(){
    it('should be defined', function(){
        expect(distanceDecart).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof distanceDecart).toBe('function')
    })
    it('should not work without arguments', function(){
        expect(distanceDecart()).toBe(false)
    })
    it('should not work only with 4 arguments', function(){
        expect(distanceDecart(3, 4, 5,)).toBe(false)
    })
    it('should return number', function(){
        expect(typeof distanceDecart(3, 4, 5, 6)).toBe("number")
    })
    it('should work with zeroes', function(){
        expect(typeof distanceDecart(0, 4, 0, 6)).toBe("number")
    })
    it('should work with numbers', function(){
        expect(typeof distanceDecart(4, 4, 6, 6)).toBe("number")
    })
})
describe('numberToString', function(){
    it('should be defined', function(){
        expect(numberToString).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof numberToString).toBe('function')
    })
    it('should not wotk without an argument', function(){
        expect(numberToString()).toBe(false)
    })
    it('should return string with arguments', function(){
        expect(typeof numberToString(555)).toBe("string")
        expect(typeof numberToString(25)).toBe("string")
        expect(typeof numberToString(15)).toBe("string")
        expect(typeof numberToString(5)).toBe("string")
        expect(typeof numberToString(555)).not.toBe("boolean")
        expect(typeof numberToString(25)).not.toBe("boolean")
        expect(typeof numberToString(15)).not.toBe("boolean")
        expect(typeof numberToString(5)).not.toBe("boolean")
    })
})