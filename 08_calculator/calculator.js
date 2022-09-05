const add = function(a,b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a,b) {
  let sum = a - b;
  return sum;
	
};

const sum = function(numbers) {
  var x = numbers.reduce(function(prev,curr){
    return curr + prev;
  },0);
  return x;
	
};

const multiply = function(numbers) {
  return numbers.reduce((a,b) => a*b)
}


const power = function(a,b) {
  let sum = Math.pow(a,b);
	return sum;
};

const factorial = function(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
