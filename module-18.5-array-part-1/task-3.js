
/*
Problem-3:
    3. Checking Array Membership with ‘includes’
        Instructions:
        Create an array of books containing different book.
        Use the includes method to check if the array contains a javascript book.
        Print a message to the console indicating whether the element is present in the array or not
*/


// Solve it-----


// List of Books
let listOfBook = ["Python", "Java", "JavaScript", "C", "C++"];

//Whether the array contains a javascript book
let bookSearch = listOfBook.includes("JavaScript");

// Message
if(bookSearch){
    console.log("The array contains a JavaScript book.")
}
else{
    console.log("The array does not a JavaScript book");
}