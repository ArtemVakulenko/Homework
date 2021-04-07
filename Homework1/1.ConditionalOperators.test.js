var {sumOrMultiply} = require ('./1.ConditionalOperators')
// var getQuarterByCoordinates  = require ('./1.ConditionalOperators')
// var getSumOfPositiveNumbers  = require ('./1.ConditionalOperators')
// var sumOrMultiplyPlus3  = require ('./1.ConditionalOperators')
// var getGradeByRating  = require ('./1.ConditionalOperators')

describe('sumOrMultiply', function(){
    it('should be defined', function(){
        expect(sumOrMultiply).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof sumOrMultiply).toBe('function')
    })
})