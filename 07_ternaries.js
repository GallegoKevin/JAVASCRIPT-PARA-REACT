/* 07_ternaries.js */


const username = '';
let statusMessage = username ? 'El nombre de usuario existe' : 'No se ha ingresado nombre de usuario';
console.log(statusMessage);


/*

let statusMessage;
const username = 'Ana';

// ES5
if (username) {
    statusMessage = 'El nombre de usuario existe';
} else {
    statusMessage = 'No se ha ingresado nombre de usuario';
}

// ES6
username ? (statusMessage = 'El nombre de usuario existe') : (statusMessage = 'No se ha ingresado nombre de usuario');
*/