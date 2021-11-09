// 03 - data - structures - from - functions.js;

// simple example:
// Known as the "identity function"
const parrot = (value) => {
  return value;
};

console.log(parrot(1)); // returns 1
console.log(parrot('anything')); // returns 'anything'
console.log(parrot(parrot)); // returns the function parrot ([Function: parrot])

// Now can we use functions for data storage?
const recall = (value) => {
  return () => {
    return value;
  };
};

const getValue = recall('My Value');
console.log(getValue()); // logs "My Value"

// Look at that, a function as data!
// Lets use it to create a simple data structure
// const makePair = (value1, value2) => {
//   return () => {
//     return value1;
//   };
// };

// So that only returns the 1st value, and immediately forgets the second.  What about:
const makePair = (value1, value2) => {
  return (chooseFirst) => {
    if (chooseFirst === true) {
      return value1;
    } else {
      return value2;
    }
  };
};

const myPair = makePair('First Element', 'Second Element');
console.log(myPair(true));
console.log(myPair(false));

// Cool but wouldn't work if you didn't already know what was inside of it
// How about this:
const getFirst = (pair) => {
  return pair(true);
};

const getSecond = (pair) => {
  return pair(false);
};

console.log(getFirst(myPair)); // returns "First Element"

// We can build on this to make an immutable list structure:
const initializeList = (initialValue) => {
  return makePair(initialValue, undefined);
};

const shift = (value, stack) => {
  return makePair(value, stack);
};

const head = (stack) => {
  return getFirst(stack);
};

const tail = (stack) => {
  return getSecond(stack);
};

// Let's try this thing out!
const myList = initializeList(1);
const sizeTwo = push(2, myList);
const sizeThree = push('Foo', sizeTwo);
const sizeFour = push(false, sizeThree);

console.log(head(sizeFour));
const tailedFour = tail(sizeFour);
consle.log(head(tailedFour));
