import fetch from 'node-fetch';
// 02 - higher - order - functions.js;

// At its core a higher-order function is just a function
// that accpts a function as an argument or returns a function

// functions in js can be passed around like any other variable.

const items = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < items.length; i++) {
  console.log(`${i}: ${items[i]}`);
}

// Instead we can for each, whcih takes a function as an argument
items.forEach((item, index) => console.log(`${index}: ${item}`));

// Callbacks or promises -- higher order functions!
fetch('https://aws.random.cat/meow')
  .then((response) => response.json())
  .then((data) => console.log(data.file));

// Map() another example...lovely

// Basic lgger
const createLogger = (context) => {
  return (msg) => {
    console.log(`${context}: ${msg}`);
  };
};

const log = createLogger('myFile');

log('A very important message ');

// Closures + HOF's = private variables!
let protectedObject = (function () {
  let myVar = 0;
  return {
    get: () => console.log(myVar),
    increment: () => myVar++,
  };
})(); // and this is...?
protectedObject.get();
protectedObject.increment();
protectedObject.get();
let myVar = 42; // Can't touch myVar, out of scope!
protectedObject.get();
