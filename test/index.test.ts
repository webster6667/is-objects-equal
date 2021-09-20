import isObjectsEqual from '../src'

describe('is equal two object', () => {

    test('detected two equal objects with equal keys and values', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '1'}])).toBeTruthy()
    });

    test('detected not equal objects with equal keys but not equal values', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '2'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys and values but with redundant property', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '1', b: '1'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys and values but with missing property', () => {
        expect(isObjectsEqual([{a: '1', b: '1'}, {a: '1'}])).toBeFalsy()
    });

    test('detected not equal objects when one of them empty', () => {
        expect(isObjectsEqual([{a: '1'}, {}])).toBeFalsy()
    });

    test('detected two deep equal objects with equal keys and values', () => {
        const firstObject = {
                    a: 1,
                    b: {
                        c: 1,
                        d: 1
                    }
        },
        secondObject = {
            a: 1,
            b: {
                c: 1,
                d: 1
            }
        }


        expect(isObjectsEqual([firstObject, secondObject])).toBeTruthy()
    });

    test('detected two more deep equal objects with equal keys and values', () => {
        const firstObject = {
                a: 1,
                b: {
                    c: 1,
                    d: 1,
                    e: {
                        f: 1,
                        g: 1
                    }
                }
            },
            secondObject = {
                a: 1,
                b: {
                    c: 1,
                    d: 1,
                    e: {
                        f: 1,
                        g: 1
                    }
                }
            }


        expect(isObjectsEqual([firstObject, secondObject])).toBeTruthy()
    });

    test('detected two equal objects with equal keys and values, but not equal in first deep level', () => {
        const firstObject = {
                a: 1,
                b: {
                    c: 1,
                    d: 1
                }
            },
            secondObject = {
                a: 1,
                b: {
                    c: 2,
                    d: 1
                }
            }

        expect(isObjectsEqual([firstObject, secondObject])).toBeFalsy()
    });

    test('detected two more deep equal objects with equal keys and values but not equal on second deep level', () => {
        const firstObject = {
                a: 1,
                b: {
                    c: 1,
                    d: 1,
                    e: {
                        f: 1,
                        g: 1
                    }
                }
            },
            secondObject = {
                a: 1,
                b: {
                    c: 1,
                    d: 1,
                    e: {
                        f: 2,
                        g: 1
                    }
                }
            }


        expect(isObjectsEqual([firstObject, secondObject])).toBeFalsy()
    });

})

describe('is equal three object', () => {

    test('detected three equal objects with equal keys and values', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '1'}, {a: '1'}])).toBeTruthy()
    });

    test('detected not equal objects with equal keys but not equal values', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '2'}, {a: '3'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys but not equal values on first', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '2'}, {a: '2'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys but not equal values on second', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '2'}, {a: '1'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys but not equal values on third', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '1'}, {a: '2'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys and values but with redundant property on second', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '1', b: '1'}, {a: '1'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys and values but with redundant property on third', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '1'}, {a: '1', b: '1'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys and values but with missing property on second', () => {
        expect(isObjectsEqual([{a: '1', b: '1'}, {a: '1'}, {a: '1', b: '1'}])).toBeFalsy()
    });

    test('detected not equal objects with equal keys and values but with missing property on third', () => {
        expect(isObjectsEqual([{a: '1', b: '1'}, {a: '1', b: '1'}, {a: '1'}])).toBeFalsy()
    });

    test('detected not equal objects when one of them empty', () => {
        expect(isObjectsEqual([{a: '1'}, {a: '1'}, {}])).toBeFalsy()
    });

})

describe('syntax', () => {

    test('compared objects must be in array', () => {

        //@ts-ignore
        expect(() => isObjectsEqual({a: '1'}, {a: '1'})).toThrow('compared object must be in array')
    });

    test('compared objects need type object second invalid', () => {
        //@ts-ignore
        expect(() => isObjectsEqual([{a: '1'}, 1])).toThrow('type of compared items must be object')
    });

    test('compared objects need type object first invalid', () => {
        //@ts-ignore
        expect(() => isObjectsEqual([1, {a: '1'}])).toThrow('type of compared items must be object')
    });

})