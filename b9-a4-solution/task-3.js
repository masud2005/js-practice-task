

// Problem-3 Solution

function deleteInvalids(array){
    // Validation Check
    if(Array.isArray(array) !== true){
        return "invalid Array!";
    }

    // Check array element equation
    let newArray = [];
    for(const element of array){
        if(typeof element === "number" && isNaN(element) === false){
            newArray.push(element);
        }
    }
    return newArray;
}

// Test Problem
console.log(deleteInvalids([2,5,6,4,8,7,9,5, "masud", NaN, null, undefined,{obc: "lala"}])); 
console.log(deleteInvalids(["1", {num:2}, NaN])); 
console.log(deleteInvalids([2,5,6,-7,9,5]));
console.log(deleteInvalids({name: "masud"}));


// test method
// console.log(typeof(NaN))
// console.log(isNaN(25));
// console.log(typeof({name: "Masud"}));
// console.log(Array.isArray([5,6,4,5,6]));