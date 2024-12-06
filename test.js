// "I go to the university every day"
// 1 find how many vowels is in the sentence


let str = "I go to the, university every... day!";
let vowels = ["a", "e", "i", "o", "u"];

// function howManyVowels(string){
//     let arrStringToChars = string.toLowerCase().split("");
//     let vowelCounter = arrStringToChars.reduce((accum, letter) => {
//         if(vowels.includes(letter)){
//             accum++;
//         }
//         return accum;
//     }, 0);
//     return vowelCounter;
  
// }

// console.log(howManyVowels(str));

// 2 print all vowels

// function printAllVowels(string){
//     let stingToChars = string.split("");
//     let filteredString = stingToChars.filter(letter => {
//        if(vowels.includes(letter.toLowerCase())) {
//         return letter;
//        } 
//     })
//     return filteredString;
// }

// console.log(printAllVowels(str))

// 3 how many times each vowel appears in the sentence

// function countEachVowel(string){
//     let stringToChars = string.toLowerCase().split("");
//     let vowelCounter = new Object();
//     stringToChars.forEach((letter) => {
//         if(vowels.includes(letter)){
//             vowelCounter[letter] = (vowelCounter[letter] || 0) + 1;
//         } 
//     })
//     return vowelCounter;
// }
// console.log(countEachVowel(str))


//how many words in the sentence

// let sentenceByWord = str.split(" ");
// console.log(sentenceByWord.length)
//how many punctuation marks in the sentence

// let pMarksArray = [',', '.', '!', '('];
// let sentenceByWord = str.split('');
// let filteredPunctuationMarks = sentenceByWord.filter(char => {
//     if(pMarksArray.includes(char)){
//         return char;
//     }
// })
// console.log(filteredPunctuationMarks);

// map Transform an array of strings into an array of their lengths.
// let strings = ['apple', 'banana', 'cherry', 'date'];
// let reversedString = strings.reverse();
// console.log(reversedString)

// // Given an array of integers, find the index of the first occurrence of a number divisible by 3
// let arr = [1, 2, 32, 4, 33, 23, 40, 30];
// let indexOfFirstDivisibleValue = arr.find(x => {
//     if (x % 3 == 0){
//         return x;
//     }
// }) 
// console.log(indexOfFirstDivisibleValue)

// filter Find all the elements in an array of strings that contain the letter "e".
// let strings = ['apple', 'banana', 'cherry', 'date'];
// let filteredStrings = strings.filter(elem => elem.includes('e'));
// console.log(filteredStrings)
// you have 2 strings make sure they are polindromes

// let stri = "A man, a plan, a canal, Panama";


// function isPolyndrome(string){
//     string = string.toLowerCase();
//     while(string.includes(" ")){
//         string = string.replace(" ", "");
//     }
//     while(string.includes(",")){
//         string = string.replace(",", "");
//     }
//  let stringReversed = string.split('').reverse().join('');
//  console.log(string);
//  console.log(stringReversed);
//  if (string == stringReversed){
//     return true;
//  }
//  return false;
// }
// console.log(isPolyndrome(stri))


// Find the First Non-Repeated Character
let phrase = "aab bcc";

function findFirstNonRepeatedChar(str){
    let strToChar = str.toLowerCase().split('');
    //can add replace to remove spectial Chars and spaces
    let charMapping = new Object();
    strToChar.forEach(letter => {
        charMapping[letter] = (charMapping[letter] || 0) + 1;
    })
    for(let key in charMapping){
        if(charMapping[key] == 1) {
            return key;
        }
    }
    return null;
}

console.log(findFirstNonRepeatedChar(phrase));