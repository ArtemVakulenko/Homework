var sumOrMultiply  = require ('./1.ConditionalOperators')
var getQuarterByCoordinates  = require ('./1.ConditionalOperators')
var getSumOfPositiveNumbers  = require ('./1.ConditionalOperators')
var sumOrMultiplyPlus3  = require ('./1.ConditionalOperators')
var getGradeByRating  = require ('./1.ConditionalOperators')

describe('sumOrMultiply', function(){
    it('should be defined', function(){
        expect(sumOrMultiply).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof sumOrMultiply).toBe('function')
    })
})

describe('getQuarterByCoordinates', function(){
    it('should be defined', function(){
        expect(getQuarterByCoordinates).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof getQuarterByCoordinates).toBe('function')
    })
})

describe('getSumOfPositiveNumbers', function(){
    it('should be defined', function(){
        expect(getSumOfPositiveNumbers).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof getSumOfPositiveNumbers).toBe('function')
    })
})

describe('sumOrMultiplyPlus3', function(){
    it('should be defined', function(){
        expect(sumOrMultiplyPlus3).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof sumOrMultiplyPlus3).toBe('function')
    })
})

describe('getGradeByRating', function(){
    it('should be defined', function(){
        expect(getGradeByRating).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof getGradeByRating).toBe('function')
    })
})