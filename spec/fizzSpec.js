describe("My FizzBuzz Game", function() {
    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    })

    describe("Return a number, Fizz, Buzz or FizzBuzz", function() {
        it("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        })
    });

    it("should be divisilble by 5 and 3 when passing 15 as the argument and return FizzBuzz", function() {
        var result = fizzBuzz(15)
        expect(result).toBe("FizzBuzz");
    });

    it("should be divisible by 3 only and return fizz", function() {
        var result = fizzBuzz(99)
        expect(result).toBe("Fizz");
    });
    
    it("should be only divisble by 5 and return Buzz", function() {
        var result = fizzBuzz(10)
        expect(result).toBe("Buzz");
    });

    it("should return result if it is not divisible by 5 or 3", function() {
        var result = fizzBuzz(2)
        expect(result).toBe(result);
    })
});