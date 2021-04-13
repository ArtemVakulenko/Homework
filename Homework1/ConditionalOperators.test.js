var {sumOrMultiply} = require ('./ConditionalOperators')
var {getQuarterByCoordinates}  = require ('./ConditionalOperators')
var {getSumOfPositiveNumbers}  = require ('./ConditionalOperators')
var {sumOrMultiplyPlus3}  = require ('./ConditionalOperators')
var {getGradeByRating}  = require ('./ConditionalOperators')

describe('sumOrMultiply', function(){
    it('should be defined', function(){
        expect(sumOrMultiply).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof sumOrMultiply).toBe('function')
    })
})