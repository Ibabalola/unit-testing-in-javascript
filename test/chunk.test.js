const chunkArray = require('../src/chunk');

describe('chunk array', () => {
    it('should exist', () => {
        expect(chunkArray).toBeDefined();
    });

    it('should return null if no chunk or length is given', () => {
        const chunkedArray = chunkArray();

        expect(chunkedArray).toBeNull();
    });

    it('should chunk an array of 10 values into chunks of 2', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const len = 2;
        const chunkedArr = chunkArray(numbers, len);

        expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
    });

    it('should chunk an array of 3 into chunks of 1', () => {
        const numbers = [1, 2, 3];
        const len = 1;
        const chunkedArr = chunkArray(numbers, len);

        expect(chunkedArr).toEqual([[1], [2], [3]]);
    });
})