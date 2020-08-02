const isAnagram = require('../src/anagram');

describe('isAnagram', () => {
    it('isAnagram function exists', () => {
        expect(typeof isAnagram).toEqual('function');
    });
    
    it('should let us know that cineman is an anagram for iceman', () => {
        expect(isAnagram('cinema', 'iceman')).toBeTruthy();
    });

    it('should let us know that Dormitory is an anagram for dirty room', () => {
        expect(isAnagram('Dormitory', 'dirty room')).toBeTruthy();
    });

    it('should let us know that Hello is NOT an anagram for Aloha', () => {
        expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
    });
})