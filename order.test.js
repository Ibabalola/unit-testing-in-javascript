const orderTotal = require('./order');

describe('Order Total', () => {
    it('should return a total of 6', () => {
        const someOrder = {
            items: [
                { name: 'item 1', quantity: 2, price: 3}
            ]
        };

        const result = orderTotal(someOrder);

        expect(result).toBe(6);
    });

    it('should return a total of 3', () => {
        const someOrder = {
            items: [
                { name: 'item 1', price: 3}
            ]
        };

        const result = orderTotal(someOrder);

        expect(result).toBe(3);
    });

    it('should return a total of 808', () => {
        const someOrder = {
            items: [
                { name: 'item 1', price: 8, quantity: 1 },
                { name: 'item 2', price: 800, quantity: 1}
            ]
        };

        const result = orderTotal(someOrder);

        expect(result).toBe(808);
    });

    it('should return a total of 60', () => {
        const someOrder = {
            items: [
                { name: 'item 1', price: 20, quantity: 1 },
                { name: 'item 2', price: 40, quantity: 1}
            ]
        };

        const result = orderTotal(someOrder);

        expect(result).toBe(60);
    });
})