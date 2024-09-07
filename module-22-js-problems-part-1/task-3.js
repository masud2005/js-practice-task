
/*
Problem-3:
    Write a function to count the number of vowels in a string.
*/


// Solve it-----

function vowelsCount(str){
    str = str.toLowerCase();
    let count = 0;
    for(i = 0; i <= str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++;
        }
    }
    return count;
}

const str = "Write a function to count the number of vowels in a string.";
const result = vowelsCount(str);
console.log(result);