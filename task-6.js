/***
 Problem-6:

    Ticket fare Calculator
        - Children (age < 10): free
        - Students get a 50% discount
        - Senior citizens (age >= 60) gets a 15% Discount
        - Otherwise Regular ticket fare 800 tk
*/

// Way 1
let ticketPrice = 800;
let age = 60;


if(age >= 60){
    let discount = ticketPrice * 15/100;
    let payAmount = ticketPrice - discount;
    console.log("Senior, citizens 15% discount price is: ", payAmount);
}
else if(age >= 10){
    let discount = ticketPrice * 50/100;
    let payAmount = ticketPrice - discount;
    console.log("Students, 50% discount price is: ", payAmount);
}
else{
    console.log("Free tickets for children");
}


/*
// Way 2
// Short Vabe

let ticketPrice = 800;
let age = 60;
if (age < 10) {
  ticketPrice = 0;
} else if (age >= 10 && age < 60) {
  ticketPrice -= ticketPrice * 0.5;
} else if (age >= 60) {
  ticketPrice -= ticketPrice * 0.15;
}

console.log("Ticket ticketPrice:", ticketPrice);

*/