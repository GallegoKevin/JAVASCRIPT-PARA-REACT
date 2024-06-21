/* 04_destructuring.js */

const coordinates = { a: 5.5, b: 8.2 };

// ES5
function computeAverage(coordinates) {
    const a = coordinates.a;
    const b = coordinates.b;
    const c = coordinates.c === undefined ? 12 : coordinates.c;

    return Math.round((a + b + c) / 3);
}

console.log(computeAverage(coordinates)); 

// ES6
function computeAverageWithDestructuring(coordinates) {
    const { a, b: e, c = 5 } = coordinates;
    return Math.round((a + e + c) / 3);
}


function calcAverageWithDestructuringParam({ a, b: e, c = 7 }) {
    return Math.round((a + e + c) / 3);
}


// Arrow function
const calcAverageWithDestructuringAF = ({ a, b: e, c = 7 }) => Math.round((a + e + c) / 3);

