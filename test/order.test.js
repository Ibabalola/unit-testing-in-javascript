const orderTotal = require('../src/order');
const emptyFunction = () => {
    return Promise.resolve({
        json: () => Promise.resolve({})
    });
};

describe('Order Total', () => {
    it('should return a total of 6', async () => {
        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        const result = await orderTotal(emptyFunction, someOrder);

        expect(result).toBe(6);
    });

    it('should return a total of 3', async () => {
        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', price: 3 }
            ]
        };

        const result = await orderTotal(emptyFunction, someOrder);

        expect(result).toBe(3);
    });

    it('should return a total of 808', async () => {
        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', price: 8, quantity: 1 },
                { name: 'item 2', price: 800, quantity: 1 }
            ]
        };

        const result = await orderTotal(emptyFunction, someOrder);

        expect(result).toBe(808);
    });

    it('should return a total of 60', async () => {
        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', price: 20, quantity: 1 },
                { name: 'item 2', price: 40, quantity: 1 }
            ]
        };

        const result = await orderTotal(emptyFunction, someOrder);

        expect(result).toBe(60);
    });
})

describe('API calls', () => {
    it('should make an API call', async () => {
        let isFakeFetchCalled = false;
        const fakeFetch = url => {
            expect(url).toBe('https://jsonplaceholder.typicode.com/todos/1');
            isFakeFetchCalled = true;
            return Promise.resolve({
                json: () => Promise.resolve({
                    id: 1,
                    title: 'this is a title',
                    rate: 5
                })
            });
        }

        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        const result = await orderTotal(fakeFetch, someOrder);
        expect(isFakeFetchCalled).toBe(true);
        expect(result).toEqual(30);
    });

    it('should reject if userId does not exists', async () => {
        let isFakeFetchCalled = false;
        const fakeFetch = url => {
            isFakeFetchCalled = true
        }

        const someOrder = {
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        await expect(orderTotal(fakeFetch, someOrder)).rejects.toThrow('UserId unspecified');
        expect(isFakeFetchCalled).toBe(false);
    });

});