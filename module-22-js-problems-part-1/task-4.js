
/*
Problem-4:
    Write a function to find the longest word in a given string.

    sample-input: I am learning Programming to become a programmer

    sample-output: Programming
*/


// Solve it-----

function findLongestWord(str){
    const words = str.split(" ");
    let longestWord = "";
    for(i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}
const str = "I am learning Programming to become a programmer";
const result = findLongestWord(str);
console.log(result);