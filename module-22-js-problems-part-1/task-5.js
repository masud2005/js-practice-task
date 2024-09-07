
/*
Problem-5:
    Generate a random number between 10 to 20.
*/


// Solve it-----

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Sample usage:
const number = randomNumber(10, 20);
console.log("Random number:", number);