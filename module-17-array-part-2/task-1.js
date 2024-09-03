

/*
Problem-1:
    Task 1
    Write a JavaScript code to reverse the array colors without using the reverse method.

    Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

    Output:

    ['orange', 'yellow', 'green', 'blue', 'red']
*/


// solve it-----

const colors = ["red", "blue", "green", "yellow", "orange"];

//------- Using for loop
const reverse = [];
for(let i = colors.length - 1; i >= 0; i--){
    // console.log(colors[i]);
    reverse.push(colors[i]);
}
console.log(reverse);


//----- Using while loop
const rev = [];
j = colors.length - 1;
while(j >= 0){
    // console.log(colors[j]);
    rev.push(colors[j]);
    j--;
}
console.log(rev);
