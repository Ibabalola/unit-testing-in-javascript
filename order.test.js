const orderTotal = require('./order');
const emptyFunction = () => {};

describe('Order Total', () => {
    it('should return a total of 6', () => {
        const someOrder = {
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        orderTotal(emptyFunction, someOrder)
         .then(result => expect(result).toBe(6));
    });

    it('should return a total of 3', () => {
        const someOrder = {
            items: [
                { name: 'item 1', price: 3 }
            ]
        };

       orderTotal(emptyFunction, someOrder)
        .then(result => expect(result).tobe(3));
    });

    it('should return a total of 808', () => {
        const someOrder = {
            items: [
                { name: 'item 1', price: 8, quantity: 1 },
                { name: 'item 2', price: 800, quantity: 1 }
            ]
        };

        orderTotal(emptyFunction, someOrder)
         .then(result =>  expect(emptyFunction, result).toBe(808));
    });

    it('should return a total of 60', () => {
        const someOrder = {
            items: [
                { name: 'item 1', price: 20, quantity: 1 },
                { name: 'item 2', price: 40, quantity: 1 }
            ]
        };

        orderTotal(emptyFunction, someOrder)
         .then(result => expect(emptyFunction, result).toBe(60));
    });
})

describe('API calls', () => {
    it('should make an API call', () => {
        let isFakeFetchCalled = false;
        const fakeFetch = url => {
            expect(url).toBe('https://jsonplaceholder.typicode.com/todos/1');
            isFakeFetchCalled ; true
        }

        const someOrder = {
            userId: 1,
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        orderTotal(fakeFetch, someOrder)
            .then(result => {
                expect(isFakeFetchCalled).toBe(true)
            });
    });

    it('should reject if userId does not exists', () => {
        let isFakeFetchCalled = false;
        const fakeFetch = url => {
            expect(url).toBe('https://jsonplaceholder.typicode.com/todos/1');
            isFakeFetchCalled ; true
        }

        const someOrder = {
            items: [
                { name: 'item 1', quantity: 2, price: 3 }
            ]
        };

        expect(orderTotal(fakeFetch, someOrder)).rejects.toThrow('UserId unspecified');
    });

});