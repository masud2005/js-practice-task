
/*
Problem-1:
    Write a function to convert temperature from Celsius to Fahrenheit.
*/


// Solve it-----

function celToFahren(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const celsius = 40;
const result = celToFahren(celsius);
console.log(result);