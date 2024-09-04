
/*
Problem-4:
    If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/


// Solve it-----

let str = "This is a sample string with x and X.";

let newString = "";
for(i = 0; i < str.length; i++){
    let char = str[i];
    if(char === "x"){
        newString += "y";
    }
    else if(char === "X"){
        newString += "Y";
    }
    else{
        newString += char;
    }
}
console.log(newString);