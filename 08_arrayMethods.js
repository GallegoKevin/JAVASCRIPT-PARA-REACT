
/* 08_arrayMethods.js */

const vehicles = [
    {
        id: 'v1',
        model: 'Sedan',
        colors: ['Black', 'White', 'Red', 'Blue']
    },
    {
        id: 'v2',
        model: 'SUV',
        colors: ['Silver', 'Gray', 'Black', 'White']
    },
    {
        id: 'v3',
        model: 'Hatchback',
        colors: ['Green', 'Yellow', 'Blue', 'White']
    },
];


console.log(vehicles);

// FIND (Buscar un elemento)

const sedanVehicle = vehicles.find((vehicle) => vehicle.model === 'Sedan');
console.log(sedanVehicle); 

//SOME(Al menos uno cumple y devuelve boolean)
console.log(vehicles.some((vehicle) => vehicle.colors.includes('Black')));

//EVERY (todos deben cumplir y develve boolean)
console.log(vehicles.every((vehicle) => vehicle.colors.includes('White')));

//MAP (Muta la data)

console.log(vehicles.map(vehicle => vehicle.model));

// FILTER 
console.log(vehicles.filter((vehicle) => vehicle.colors.includes('Blue')));

// Eliminar elementos 

const idVehicleDelete = 'v2';

console.log(vehicles.filter(vehicle => vehicle.id !== idVehicleDelete));
