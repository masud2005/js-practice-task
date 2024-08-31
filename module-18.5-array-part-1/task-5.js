
/*
Problem-5:
    Combining Arrays
        Instructions:
        Create two arrays of your choice.
        Use the concat method to combine the two arrays into a new array.
        Print both the original arrays and the combined array using console.log().
*/


// Solve it-----

// Two Arrays
let bookList_1 = ["Python", "Java", "JavaScript"];
let bookList_2 = ["HTML", "CSS", "Tailwind"];

// Combine the arrays
let combineArray = bookList_1.concat(bookList_2);
console.log("First array list: ", bookList_1);
console.log("Second array list: ", bookList_2);
console.log("Combine array List: ", combineArray);