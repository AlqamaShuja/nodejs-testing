const lib = require("../lib");

describe("absolute", () => {
    it("absolute - return positive if inp is positive", ()=>{
        const result = lib.absolute(1);
        expect(result).toBe(1);
    })
    
    it("absolute - return negative if inp is negative", ()=>{
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    })
    
    it("absolute - return zero if inp is zero", ()=>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
})


describe("greet", () => {
    it("should return greet message", () => {
        const msg = lib.greet("Alqama");
        expect(msg).toMatch(/Alqama/);
        // expect(msg).toContain('Alqama');
    })
})

describe("getCurrencies", () => {
    it("should return supported currencies", () => {
        const result = lib.getCurrencies();

        // Too General
        expect(result).toBeDefined();  // when res = 1 it also pass 
        expect(result).not.toBeNull();

        // Too Specific
        // expect(result[0]).toBe("USD");
        // expect(result[1]).toBe("AUD");
        // expect(result[2]).toBe("EUR");
        // expect(result.length).toBe(3);

        // Proper way
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");

        // Ideal way
        expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
    });
})

describe("getProduct", () => {
    it("Should return product object with given id", () => {
        const result = lib.getProduct(1);
        expect(result).toEqual({ id: 1, price: 10 });

        // When many other property but you can't list everyone here
        expect(result).toMatchObject({ id: 1, price: 10 });

        // Check fot single proprty
        expect(result).toHaveProperty("id", 1)
    })
})