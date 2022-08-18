let flattenedParameters = [];

let bigIntNumbers = [];
let everythingNotBigInt = [];
let integerNumbers = [];

let unsafeNumbers = [];
let safeIntegerNumbers = [];

const flattenParameters = (...numbers) => flattenedParameters = [numbers].flat(Infinity);

const groupParameters = () => {
    bigIntNumbers = flattenedParameters.filter(number => typeof number == 'bigint');
    everythingNotBigInt = flattenedParameters.filter(number => typeof number !== 'bigint');
};

const collectIntegerNumbers = () => {
    integerNumbers = everythingNotBigInt.map(item => Number(item))
        .filter(item => !isNaN(item))
        .filter(item => Number.isInteger(item));
};

const checkForUnsafeNumbers = () => integerNumbers.map(item => {
    if (!Number.isSafeInteger(item)) {
        bigIntNumbers.push(BigInt(item));
        unsafeNumbers.push(item);
    }
}
);

const removeUnsafeNumbers = () =>
    safeIntegerNumbers = integerNumbers.filter(function (item) {
        return unsafeNumbers.indexOf(item) === -1;
    });

const addNumbersUp = () => {
    if (bigIntNumbers.length > 0) {
        bigIntNumbers = bigIntNumbers.concat(safeIntegerNumbers.map(number => BigInt(number)));
        return bigIntNumbers.reduce((previousValue, currentValue) => previousValue + currentValue);
    } return safeIntegerNumbers.reduce((previousValue, currentValue) => {
        if (Number.isSafeInteger(previousValue) && Number.isSafeInteger(currentValue) && Number.isSafeInteger(previousValue + currentValue)) {
            return (previousValue + currentValue)
        } return (BigInt(previousValue) + BigInt(currentValue))
    })
};

const summarize = (...parameters) => {
    flattenParameters(parameters);
    groupParameters();
    checkForUnsafeNumbers(collectIntegerNumbers());
    removeUnsafeNumbers();
    return addNumbersUp();
}

summarize(10 ** 4, 22, 45.2)

export default summarize;