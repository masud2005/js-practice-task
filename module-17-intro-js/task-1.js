
/*
Problem-1:
    You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

    Input:
    The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

    Output:
    Print the result.
*/


// Solve it-----

var myBalance = 1000;
var appleCost = 400;
var orangeCost = 300;

var myCost = appleCost + orangeCost;
var backAmount = myBalance - myCost;
console.log(backAmount);