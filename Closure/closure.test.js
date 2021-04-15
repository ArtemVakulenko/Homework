var {tickets} = require("./closure.js")
var {getQuantityPostsByAuthor} = require("./closure.js")

describe('tickets', function(){
    it('should be defined', function(){
        expect(tickets).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof tickets).toBe('function')
    })
    it('should not work without array', function(){
        expect(tickets(1)).toBe("wrong argument, should be array")
        expect(tickets(1)).not.toBe('true')
        expect(tickets(1)).not.toBe('false')
    })
    it('should work with positive array', function(){
        expect(tickets([25, 25, 50])).toBe("true")
        expect(tickets([25, 25, 50, 100])).toBe("true")
        expect(tickets([25, 25, 50])).not.toBe("false")
        expect(tickets([25, 25, 50, 100])).not.toBe("false")
        expect(tickets([25, 25, 50])).not.toBe("wrong argument, should be array")
        expect(tickets([25, 25, 50, 100])).not.toBe("wrong argument, should be array")
    })
    it('should work with negative array', function(){
        expect(tickets([25, 100])).toBe("false")
        expect(tickets([25, 50, 100])).toBe("false")
        expect(tickets([25, 100])).not.toBe("true")
        expect(tickets([25, 50, 100])).not.toBe("true")
        expect(tickets([25, 100])).not.toBe("wrong argument, should be array")
        expect(tickets([25, 50, 100])).not.toBe("wrong argument, should be array")
    })
})

describe('getQuantityPostsByAuthor', function(){
    it('should be defined', function(){
        expect(getQuantityPostsByAuthor).toBeDefined()
    })
    it('should be function', function(){
        expect(typeof getQuantityPostsByAuthor).toBe('function')
    })
    it('should be function', function(){
        expect(typeof getQuantityPostsByAuthor).toBe('function')
    })
})