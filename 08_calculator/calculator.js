const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let totalSum = 0;
  for (each of array) {
    totalSum += each;
  }
  return totalSum;
};

const multiply = function(array) {
  let totalMult = 1;
  for (each of array) {
    totalMult *= each;
  }
  return totalMult;
};

const power = function(a,b) {
	let powerValue = 1;
  for (i = 0; i < b; i++) {
    powerValue *= a;
  }
  return powerValue;
};

const factorial = function(x) {
  let factorialArray = [];
  let factorialValue = 1;
  
  for (i = x; i >= 1; i--) {
    factorialArray.push(i);
  }

  for (each of factorialArray) {
    factorialValue *= each;
  }

  return factorialValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
