let numericConverter = number => {
    return {
        binary: number.toString(2),
        octal: number.toString(8),
        hexa: number.toString(16),
    };
};

export default numericConverter;
