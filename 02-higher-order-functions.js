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
fetch('https://aws.random.cat/meow', (response) => {
  console.log(response.file);
});

// get('https://random.dog');
