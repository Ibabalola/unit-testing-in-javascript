const functions = require('../src/functions');

// CHEc
describe('Functions', () => {
    beforeAll(() => {
        console.log('Database Initialised...');
    });

    beforeEach(() => {
        console.log('Database clear...');
    });

    afterAll(() => {
        console.log('Database Closed...');
    });

    afterEach(() => {
        console.log('Database fill...');
    })

    it('should Add 2 + 2 to equal 4', () => {
        // Jest Matcher - toBe - looks for a particular primitive value
        expect(functions.add(2, 2)).toBe(4);
    });

    it('should Add 2 + 2 to NOT equal 5', () => {
        expect(functions.add(2, 2)).not.toBe(5);
    });

    it('should be null', () => {
        expect(functions.isNull()).toBeNull();
    });

    it('should be falsy when given null', () => {
        expect(functions.checkValue(null)).toBeNull();
    });

    it('should be falsy when given 0', () => {
        expect(functions.checkValue(0)).toBeFalsy();
    });

    it('should be falsy when given 2', () => {
        expect(functions.checkValue(2)).not.toBeFalsy();
    });

    it('should be Brad Traversy object', () => {

        // .toBe is for primative types and not for 
        // Object because objects uses references
        // Use toEqual instead
        expect(functions.createUser()).toEqual({
            firstName: 'Brad',
            lastName: 'Traversy'
        });
    });

    it('should be under 1600', () => {
        const load1 = 800;
        const load2 = 700;
        expect(load1 + load2).toBeLessThan(1600);
    });

    it('should be under or Equal to 1600', () => {
        const load1 = 800;
        const load2 = 700;
        expect(load1 + load2).toBeLessThanOrEqual(1600);
    });

    it('There is no I in team', () => {
        expect('team').not.toMatch(/I/i);
    });

    it('Admin should be in usernames', () => {
        usernames = ['john', 'karen', 'admin'];
        expect(usernames).toContain('admin');
    });
});

describe('Working with async data', () => {
    // Promise
    // it('should fetch a user with the name of Leanne Graham', () => {
    //     expect.assertions(1);
    //     return functions.fetchUser()
    //         .then(data => {
    //             expect(data.name).toEqual('Leanne Graham');
    //         });
    // });

    // Async Await
    it('should fetch a user with the name of Leanne Graham', async () => {
        const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
    });
});
