
/*
Problem-2:
    Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

    Input:
    The first line of the input is the marks of the five subjects mentioned above, respectively.

    Output:
    Print the result in 2 decimal places.
*/


// Solve it-----

var mathematics = 85;
var biology = 80;
var chemistry = 82;
var physics = 88;
var bangla = 90;
var english = 70;

var averageMark = (mathematics + biology + chemistry + physics + bangla + english)/6;
console.log(averageMark.toFixed(2));