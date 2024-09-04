
/*
Problem-2:
    Count how many times a string has the letter a or A
*/


const string = "This is a sample string with multiple occurrences of the letter a and A.";

let count = 0;
for(let i = 0; i < string.length; i++){
    if(string[i] === "a" || string[i] === "A"){
        count++;
    }
}
console.log(count);