const fibonacci = function(n) {

    let parsedN = parseInt(n);

    if (parsedN < 0) return 'OOPS'
    if (parsedN === 0) return prev;

    let secondPrev = 0
    let firstPrev = 1;

    for (let i = 2; i <= parsedN; i++) {
        let sum = secondPrev + firstPrev;
        secondPrev = firstPrev
        firstPrev = sum;
    }
    return firstPrev;
};

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
