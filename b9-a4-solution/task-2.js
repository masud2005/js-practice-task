

// Problem-2 Solution


function checkName(name){
    // Validation check
    if(typeof name !== "string"){
        return "invalid";
    }

    // String Equation
    // const lastLetter = name[name.length -1];
    const lastLetter = name.slice(-1).toLowerCase();
    const checkArray = ["a", "y", "i", "e", "o", "u", "w"];

    // let result = false;
    // for(const char of checkArray){
    //     if(char === lastLetter){
    //         result = true;
    //     }
    // }
    
    // use ternary operator
    const result = checkArray.includes(lastLetter);
    return result ? "Good Name" : "Bad Name";
}

// Test problem-2
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
