
/*
Problem-4:
    Count the number of properties.

    Input:

    let student = {
        name: 'Ariana Grande',
        age: 21,
        city: 'Gaibandha',
        isStudent: true
    };
    
    Output:
    4

*/


// Solve it-----

let student = {
    name: "Ariana Grande",
    age: 21,
    city: "gaibandha",
    isStudent: true
}

let count = 0;
for(const i in student){
    count += 1;
}
console.log(count);
