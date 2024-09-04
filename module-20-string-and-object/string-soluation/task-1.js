

/*
Problem-1:
    Count how many times a string has the letter a
*/


// Solve it-----
const string = "my name is masud rana. i am study from dinajpur polytechnic institute.";

let count = 0;
for(let i = 0; i < string.length; i++){
    if(string[i] === "a"){
        count += 1;
    }
}
console.log(count);