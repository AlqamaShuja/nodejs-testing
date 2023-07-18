const exercise = require("../exercise1")

describe("fizzBuzz", () => {
    it("should throw exception if input is not a number", () => {
        // const result = exercise.fizzBuzz("hello");
        expect(() => { exercise.fizzBuzz("hello") }).toThrow();
        expect(() => { exercise.fizzBuzz(null) }).toThrow();
        expect(() => { exercise.fizzBuzz("") }).toThrow();
        expect(() => { exercise.fizzBuzz({}) }).toThrow();
        expect(() => { exercise.fizzBuzz(undefined) }).toThrow();
        expect(() => { exercise.fizzBuzz(false) }).toThrow();
    });

    it("should return FizzBuzz if input is divisible by 3 and 5", () => {
        const result = exercise.fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
        expect(result).toContain("FizzBuzz");
        expect(result).toMatch(/FizzBuzz/);
    });

    it("should return Fizz if input is divisible by 3 only", () => {
        const result = exercise.fizzBuzz(6);
        expect(result).toMatch(/Fizz/);
    });

    it("should return Buzz if input is divisible by 5 only", () => {
        const result = exercise.fizzBuzz(10);
        expect(result).toMatch(/Buzz/);
    });
    
    it("should return input if input is not divisible by 3 or 5", () => {
        const result = exercise.fizzBuzz(1);
        expect(result).toBe(1);
    });
});