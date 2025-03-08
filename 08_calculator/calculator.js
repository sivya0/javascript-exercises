const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => {return acc + curr}, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => {return acc * curr}, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
};
console.log(sum([1,2,3]))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
