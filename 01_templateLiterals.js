/* 01_templateLiterals.js */

const firstName = 'Maria';
const secondName = 'Pérez';

// ES5
console.log('Bienvenida ' + firstName + ' ' + secondName);

// ES6
console.log(`Bienvenida ${firstName} ${secondName}`);

// REACT

const LinkButton = ({ className, text, href, ...props }) => {
    return (
        <a className={`button ${className}`} href={href} {...props}>
            {text}
        </a>
    );
};