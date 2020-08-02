const orderTotal = require('../src/order');

describe('Order Total', () => {
    let fakeFunction;

    beforeEach(() => {
        fakeFunction = jest.fn().mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({})
        }));
    });

    it('should return a total of 6', async () => {
        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        const result = await orderTotal(fakeFunction, someOrder);

        expect(result).toBe(6);
        expect(fakeFunction).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
    });

    it('should return a total of 3', async () => {
        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', price: 3 }
            ]
        };

        const result = await orderTotal(fakeFunction, someOrder);

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

        const result = await orderTotal(fakeFunction, someOrder);

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

        const result = await orderTotal(fakeFunction, someOrder);

        expect(result).toBe(60);
    });
});

describe('API calls', () => {
    let fakeFetch;

    beforeEach(() => {
        fakeFetch = jest.fn().mockReturnValue(
            Promise.resolve({
                json: () => Promise.resolve({
                    id: 1,
                    title: 'this is a title',
                    rate: 5
                })
            })
        );
    });

    it('should make an API call', async () => {
        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        const result = await orderTotal(fakeFetch, someOrder);
        expect(fakeFetch).toHaveBeenCalled();
        expect(fakeFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos/1');
        expect(result).toEqual(30);
    });

    it('should reject if userId does not exists', async () => {

        const someOrder = {
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        await expect(orderTotal(fakeFetch, someOrder)).rejects.toThrow('UserId unspecified');
        expect(fakeFetch).not.toHaveBeenCalled();
    });

});