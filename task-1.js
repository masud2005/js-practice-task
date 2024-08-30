

/***
Problem-1:
    Free Drinks
        - Burger more than 500tk: free Coke
        - Else Coke: 30tk
*/

// Solve it-----

let burgersOffer = 500;
let userCost = 450;
if(burgersOffer < userCost){
    console.log("Wow, You have received 1 Coke reward for spending more than Rs.500.");
}
else{
    console.log("Sorry, you are not getting any offer as you spent less than Rs.500.");
}