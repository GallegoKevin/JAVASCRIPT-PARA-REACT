/* 02_shorthandPropertyName.js */

const message = 'Greetings';
const count = 10;
const flags = { option: [true, false, true] };


// ES5
console.log({ message: message, count: count, flags: flags});

// ES6
console.log({ message, count, flags});