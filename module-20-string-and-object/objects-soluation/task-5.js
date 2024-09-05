
/*
Problem-5:
    Loop through an object and print the key-value pairs with their types

    Input:

    let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    Output:

    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean
*/


// Solve it-----

let myObject = {
    name: "John Doe",
    age: 25,
    city: "Example City",
    isStudent: true
}

for(const key in myObject){
    const value = myObject[key];
    // console.log(value);
    const type = typeof value;
    // console.log(type);
    console.log("Key: ", key ,"| Type: ", type);
}