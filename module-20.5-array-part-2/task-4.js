

/*
Problem-4:
    Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

    Input: const statement = 'I am a hard working person'

    Output:

    'person working hard a am I'
*/


// Solve it -----


const statement = "I am a hard working person";

const words = statement.split(" ");
// console.log(words);

const reversedWords = words.reverse();
// console.log(reversedWords);

const reversedSentence = reversedWords.join(" ");
console.log(reversedSentence);




// Short Vabe

const reverse = statement.split(" ").reverse().join(" ");
console.log(reverse);