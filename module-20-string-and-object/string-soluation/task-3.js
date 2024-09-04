
/*
Problem-3:
    Check whether a string contains all the vowels a, e, i, o, u

*/


// Solve it-----

let str = "Education";
str = str.toLowerCase();
let allVowelsPresent = true;

if(str.indexOf("a") === -1 || str.indexOf("e") === -1 || str.indexOf("i") === -1 || str.indexOf("o") === -1 || str.indexOf("u") === -1){
    allVowelsPresent = false;
}

if(allVowelsPresent){
    console.log(str,": The string contains all the vowels");
}else{
    console.log(str,": The string doesn't content all the vowels");
}
