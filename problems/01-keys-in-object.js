/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns 
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

// function keysInObject(obj) {
//   let array = []
//   for(let values in obj) {
//   array.push(obj[values])
//   }
//   return array
// }

// let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
// let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
// keysInObject(animals); // => ["dog", "cat", "bison"]
// keysInObject(foods); // => ["apple", "lemon", "mango"]

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}

function keysInObject(obj) {
  let array = [];
  for (let key in obj) {
    array.push(key);  // Use 'key' instead of 'values'
  }
  return array;
}

console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
console.log(keysInObject(foods));   // => ["apple", "lemon", "mango"]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;