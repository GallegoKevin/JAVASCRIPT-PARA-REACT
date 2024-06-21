/* 06_esModules.js */


// COMMONJS

function subReduce(a, b) {
    return a - b;
}


const nameAPI = 'localhost:8080';
const portNumber = 8000;


//EXPORTAR

module.exports = {subReduce , nameAPI , portNumber};

//IMPORTA

const { subReduce } = require('./06_esModules');


//  ES6

export const subtract = (a, b) => a - b;
export const nameapi = 'localhost';
export const port = 8000;
import { subtract, nameapi, port } from './05_parameterDefaults';