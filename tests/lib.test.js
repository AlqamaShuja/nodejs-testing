const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

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

describe("registerUser", () => {
    it("should return object of user if input is string (name)", () => {
        const result = lib.registerUser("alqama");
        expect(result).toMatchObject({ username: "alqama" });
        expect(result.id).toBeGreaterThan(0);
    });

    it("should return Exception if no input is falsy", () => {
        const args = [null, undefined, NaN, 0, false, ""];
        args.forEach(a => {
            expect(() => { lib.registerUser(a) }).toThrow();
        })
    })
})

describe("applyDiscount", () => {
    it("should apply 10% discount if customer has more than 10 points", () => {
        db.getCustomerSync = function(customerId){
            console.log("Reading fake customer...");
            return { id: customerId, points: 20 };
        }
        const order = { customerId: 11, totalPrice: 10 };
        const result = lib.applyDiscount(order);
        expect(order.totalPrice).toBe(9);
    });
})

describe("notifyCustomer", () => {
    it("should send an email to the customer", async () => {

        // const mockFunction = jest.fn();
        // // return from mock function
        // mockFunction.mockReturnValue(1);
        // // return promise
        // mockFunction.mockResolvedValue(1);
        // mockFunction.mockRejectedValue(new Error("msg"));
        // try {
        //     const result = await mockFunction();
        // } catch (error) {
            
        // }

        db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });

        // db.getCustomerSync = function(customerId){
        //     return { id: customerId, email: 'a' };
        // }

        mail.send = jest.fn();
        // let emailSent = false;
        // mail.send = function(email, message) {
        //     emailSent = true;
        // }

        lib.notifyCustomer({ customerId: 1 });

        // expect(emailSent).toBe(true);
        expect(mail.send).toHaveBeenCalled(); // when no arg pass
        // expect(mail.send).toHaveBeenCalledWith("a", "...");    // when arg pass
        // expect(mail.send.mock.calls[0][0]).toBe("a");    // when arg pass
        // expect(mail.send.mock.calls[0][1]).toBe(/order/);    // when arg pass

    })
})