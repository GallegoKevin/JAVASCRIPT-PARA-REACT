/* 05_parameterDefaults.js */

// ES5
function multiply(x, y) {
    y = y === undefined ? 1 : y;
    x = x === undefined ? 1 : x;
    // console.log(x);
    // console.log(y);

    return x * y;
}

console.log(multiply(4, 5));

// ES6
function multiplyWithDefaults(x = 1, y = 1) {
    return x * y;
}

// Arrow function con parámetros por defecto
const multiplyWithDefaultsAF = (x = 1, y = 1) => x * y;

console.log(multiplyWithDefaultsAF()); 