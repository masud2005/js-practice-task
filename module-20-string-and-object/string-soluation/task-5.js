
/*
Problem-5:
    Capitalize Every first Letter of each word in a String
*/


// Solve it-----

const str = "this is a sample string";

let newString = "";
for(i = 0; i < str.length; i++){
    if(i === 0 || str[i -1] === " "){
        newString += str[i].toUpperCase();
    }
    else{
        newString += str[i];
    }
}
console.log(newString);