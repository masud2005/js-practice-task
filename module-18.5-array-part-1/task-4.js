
/*
Problem-4:
    4. Checking if it's an Array
        Instructions:
        Create different variables, each containing either an array or a non-array value.
        Now use isArray to check if each variable is an array.
        Print a message to the console indicating whether each variable is an array or not.
*/

// Solve it-----

// Create different variables
let books = ["Python", "Java", "JavaScript"];
let number = 45;
let fruits = ["Apple", "Mango", "Banana", "Tomato"];
let person = "Masud";
let empty = [];

// check if each variable is an array
let isArray = Array.isArray(fruits);

// Message
if(isArray){
    console.log("This variable is an array");
}
else{
    console.log("This variable is not an array");
}