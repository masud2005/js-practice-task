

/* 
Problem-2:
    Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/


// Solve it-----

let sum = 0;
let i = 1;
while(true){
    sum = sum + i;
    i++;
    if(sum >= 100){
        break;
    }
}
console.log(sum);