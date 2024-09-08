

// Problem-4 Solution

function password(obj){
    // Validation check
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return "invalid";
    }
    
    // Password Equation
    const capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    const passwordString = capitalSiteName + "#" + obj.name + "@" + obj.birthYear;
    return passwordString;
}

// Test Problem
console.log(password({name: "masud", birthYear: 2005, siteName: "google"}));
console.log(password({name: "masud", birthYear: 200, siteName: "google"}));
console.log(password({birthYear: 2005, siteName: "google"}));