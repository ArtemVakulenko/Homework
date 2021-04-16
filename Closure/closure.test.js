var {tickets, 
    getQuantityPostsByAuthor, 
    complexFunction, 
    cache,} = require("./closure.js")

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
})

describe("complexFunction", function () {
    it("should be defined ", function () {
      expect(complexFunction).toBeDefined();
    });
    it("should be function", function () {
      expect(typeof complexFunction).toBe("function");
    });
    it("should not work without arguments", function () {
      expect(complexFunction()).toBe(NaN);
    });
    it("should work with different types of arguments", function () {
      expect(complexFunction(42, "str")).toBe("42str");
      expect(complexFunction("str", 42)).toBe("str42");
    });
  });
  
describe('cache', function () {
    it('should be defined ', function () {
        expect(cache).toBeDefined()
    })
    it('should be function', function () {
        expect(typeof cache).toBe('function');
    })
    it('should return function', function () {
        expect(typeof cache()).toBe('function');
    })
    it('should get answers from cache', function () {
        var complexFunction = jest.fn()
        var func = cache(complexFunction)
        func("str", 42)
        func("str", 42)
        expect(complexFunction).toBeCalledTimes(1);
    })
    it('should recognize different arguments and return asnwer from cache if needed', function () {
        var complexFunction = jest.fn()
        var func = cache(complexFunction)
        func("str", 42)
        func("str", 42)
        func("str", 43)
        func("str", 43)
        expect(complexFunction).toBeCalledTimes(2);
    })
    it('should  not work with cached arguments in diff order', function () {
        var complexFunction = jest.fn()
        var func = cache(complexFunction)
        func("str", 42)
        func(42, 'str')
        func("str", 42)
        expect(complexFunction).toBeCalledTimes(2);
    })
})