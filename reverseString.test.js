const reverseString = require('./reverseString');

describe('reverseString', () => {
    it('should exists', () => {
        expect(reverseString).toBeDefined();
    });

    it('should reverse string', () => {
        expect(reverseString('hello')).toEqual('olleh');
    });

    it('should reverse string with a capital letter', () => {
        expect(reverseString('Hello')).toEqual('olleh');
    });
});