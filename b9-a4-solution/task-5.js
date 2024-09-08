

// Problem solution

function monthlySavings(arr, livingCost){
    // Validation check
    if(Array.isArray(arr) !== true || typeof livingCost !== "number"){
        return "invalid input";
    }

    // Calculate Total Income
    let totalIncome = 0;
    for(const payment of arr){
        if(payment >= 3000){
            const tax = payment * 0.2;
            totalIncome += payment - tax; 
        }
        else{
            totalIncome += payment;
        }
    }

    // Calculate Savings
    const savings = totalIncome - livingCost;
    // if(savings >= 0){
    //     return savings;
    // }
    // else{
    //     return "earn more";
    // }

    // use ternary operator
    return savings >= 0 ? savings : "earn more";
}

// Test Problem
console.log(monthlySavings([1000,2000,3000],5400));
console.log(monthlySavings([1000,2000,2500],5000));
console.log(monthlySavings([900,2700,3400],10000));
console.log(monthlySavings(100,[900,2700,3400]));