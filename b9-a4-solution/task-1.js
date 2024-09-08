

// Problem-1 solution


function calculateMoney(ticketSale){
    // Validation check
    if(ticketSale < 0){
        return "Invalid Number"
    }

    // Equation
    const dailyTicketSale = ticketSale * 120;
    const dailyExpense = 500 + (8 * 50);
    const remainingMoney = dailyTicketSale - dailyExpense;
    return remainingMoney;
}

// Test Problem
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
