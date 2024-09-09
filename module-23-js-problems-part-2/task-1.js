
/*
Problem-1:
    Find the lowest number in the array below.
    const heights2 = [167, 190, 120, 165, 137];
*/


//Solve it-----

function lowestNumber(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(min > num){
            min = num;
        }
    }
    return "Lowest number is: " + min;
}
const numbers = [167, 190, 120, 165, 137];
console.log(lowestNumber(numbers));