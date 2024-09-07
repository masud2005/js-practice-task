
/*
Problem-2:
    You are given an array of numbers. Count how many times the a number is repeated in the array.

    sample-input: numbers = [5,6,11,12,98, 5]
    find: 5
    output: 2


    sample-input:
    numbers = [5,6,11,12,98, 5]
    find: 25
    output: 0
*/


// Solve it-----

function repeatNumCount(numbers, find){
    let count = 0;
    for(let num of numbers){
        if(numbers[num] === find){
            count++;
        }
    }
    return count;
}

// 1st 
const numbers1 = [5, 6, 11, 12, 98, 5];
const find1 = 5
const result1 = repeatNumCount(numbers1, find1);
console.log(result1);

// 2nd
const numbers2 = [5, 6, 11, 12, 98, 5];
const find2 = 25
const result2 = repeatNumCount(numbers2, find2);
console.log(result2);
