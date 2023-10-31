const { describe } = require('node:test');
const sum = require('./script');

describe('Soma', ()=>{
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

test('atribuição de objeto', () => {
    const data = { one: 1, two: 2 };
    expect(data).toStrictEqual({ one: 1, two: 2 });
});

test('adicionando números positivos não é zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});