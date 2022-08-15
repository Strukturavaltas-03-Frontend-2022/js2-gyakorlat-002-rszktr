import numericConverter from '../solution/js/numericConverter';

describe( '2. feladat', () => {
    test( 'test numericConverter function with a small number', () => {
        const result = numericConverter(55);
        expect(result).toEqual({binary: '110111', octal: '67', hexa: '37'});
    });
    
    test( 'test numericConverter function with a big number', () => {
        const result = numericConverter(10**3);
        expect(result).toEqual({binary: '1111101000', octal: '1750', hexa: '3e8'});
    });
});
