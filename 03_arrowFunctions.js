/* 03_arrowFunctions.js */

// ES5

function getZero() {
    return 0;
}

function multiplyByTwo(a) {
    return a * 2;
}

function subtract(a, b) {
    return a - b;
}

// ES6

const getZeroWithAF = () => 0;

const multiplyByTwoWithAF = (a) => a * 2;

const subtractWithAF = (a, b) => a - b;

// REACT

const MessageList = ({ messages }) => {
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
        </ul>
    );
};