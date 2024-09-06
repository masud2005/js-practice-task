
/*
Problem-5:
    Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/


// Solve it-----

function odd_even(num){
    if(num % 2 === 0){
        return "It is an even number."
    }
    else{
        return "It is an odd number";
    }
}
const number = 10;
const result = odd_even(number);
console.log(result);