
/*
Problem-4:
    Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/


// Solve it-----

function count_zero(str){
    let count = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] === "0"){
            count += 1;
        }
    }
    return count;
}
const string = "100010011110010101";
const count = count_zero(string);
console.log(count);