const leapYears = function(year) {

    if (year % 100 === 0 && year % 400 === 0) return true; // divisible by 100 AND devisable by 400
    if (year % 4 === 0 && year % 100 !== 0) return true; // divisible by 4 AND non-devisable by 100
    return false;
};
console.log(leapYears(1600))
// Do not edit below this line
module.exports = leapYears;

