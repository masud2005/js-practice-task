/***
 Problem-6:

    Ticket fare Calculator
        - Children (age < 10): free
        - Students get a 50% discount
        - Senior citizens (age >= 60) gets a 15% Discount
        - Otherwise Regular ticket fare 800 tk
*/

// Solve it-----

let ticketPrice = 800
let age = 50;
let isStudent = false;

if(age < 10){
  console.log("Free tickets for children");
}
else if(isStudent){
  let discountPrice = ticketPrice - ticketPrice * 50/100;
  console.log("Students, 50% discount price is: ", discountPrice);
}
else if(age >= 60){
  let discountPrice = ticketPrice - ticketPrice * 15/100;
  console.log("Senior, citizens 15% discount price is: ", discountPrice);
}
else{
  console.log("Regular Price is: ", ticketPrice);
}
