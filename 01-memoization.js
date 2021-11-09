// 01 - memoization.js;

// Memoization: a functional programming technique used to
// deal with costly pure functions.

// You "wrap" a function with another function that remembers
// the arguments and returns the results of function calls.

// Timer function
const timeFn = (fn, args = []) => {
  const start = Date.now();
  const returnValue = fn(...args);
  const end = Date.now();
  console.log(`Execution took ${end - start} milliseconds.`);
  return returnValue;
};

// Let's test it!
const summate = (countTo) => {
  let value = 0;
  for (let i = 0; i < countTo; i++) {
    value += i;
  }
  return value;
};

// Memoize that function
let simpleMemoizer = (fn) => {
  // Set up a lookup table within a closure so
  // we have access every time our inner function is called
  const lookupTable = {};
  return (arg) => {
    // step 1
    if (arg in lookupTable) {
      // Step 2
      return lookupTable[arg];
    } else {
      // Step 3
      let returnValue = fn(arg);
      // Step 4
      lookupTable[arg] = returnValue;
      // Step 5
      return returnValue;
    }
  };
};

sum = timeFn(summate, [1000000000]);

const memoSummate = simpleMemoizer(summate);

timeFn(memoSummate, [100000000]);

timeFn(memoSummate, [100000000]);
