const sumAll = function(numFrom, numTo) {
    if (numFrom < 0 || numTo < 0 || typeof numFrom !== 'number' ||  typeof numTo !== 'number' ||
        numFrom % 1 !== 0 || numTo % 1 !== 0
    ) return 'ERROR';

    let smaller;
    let greater;

    if (numFrom <= numTo) {
        smaller = numFrom;
        greater = numTo;
    } else {
        smaller = numTo;
        greater = numFrom;
    }

    let sum = 0;
    for (let i = smaller; i <= greater; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
