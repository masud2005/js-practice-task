

/*
Problem-3:
    Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/


// Solve it-----

function make_avg(num, size){
    let sum = 0;
    for(let i = 0; i < size; i++){
        sum = sum + num[i];
    }
    return sum / size;
}
const numbers = [10, 20, 30, 40, 50, 60];
const average = make_avg(numbers, numbers.length);
console.log(average);