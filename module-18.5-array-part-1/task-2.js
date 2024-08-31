
/*
Problem-2:
    2. Add or remove elements
        Declare an array of 3 tourist destinations
        Add a new tourist destination to your tourist array
        Add two more to your array
        Remove the last tourist destination you have added
        display the final array as output
*/


// Solve it-----


// 3 tourist destinations name
let placeName = ["Cox's bazar", "Sundarbans", "Chittagong Hill Tracts"];

// add a new tourist destination
placeName.push("Kuakata");

// add two tourist destination
placeName.push("Sreemangal", "Paharpur");

// remove last tourist destination
placeName.pop();

// Final array output
console.log(placeName);