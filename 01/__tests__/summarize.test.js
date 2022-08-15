import summarize from '../solution/js/summarize';

describe( '1. feladat', () => {
    test( 'test summarize function with not safe inputs', () => {
        const result = summarize(10**45, 22, 45.2);
        expect(result).toEqual(999999999999999929757289024535551219930759190n);
    });
    
    test( 'test summarize function with safe inputs', () => {
        const result = summarize(10**4, 22, 45.2);
        expect(result).toEqual(10022);
    });
});
