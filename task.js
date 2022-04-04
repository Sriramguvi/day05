
// 1. Sum of all numbers in an array 

// Anonymous

var sum=function(a,b,c){
    return a+b+c;

}
console.log(sum(2,3,4));

// IIFE

(function(a,b,c){
    console.log(a+b+c);})(1,2,3);

// 2.quiz e:Return all the palindromes in an array

// IIFE

(function(){
var words=["ram","jaiaj","madam"]
function checkPalindrom(str) { //function that checks if palindrome or not
    return str == str.split('').reverse().join('');
}

const result = words.filter(word => checkPalindrom(word));
console.log(result);})();



// Anonymous

var words=["ram","madam"];
var ses=function(str) { //function that checks if palindrome or not
    return str == str.split('').reverse().join('');
}

const result = words.filter(word => ses(word));
console.log(result);

// 3.quiz b:Convert all the strings to title caps in a string array

// IIFE

(function(){function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  }
  console.log(titleCase('iron man'));})();
  

// Anonymous

  function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  }
  console.log(titleCase('iron man'));

// 4.Print odd numbers in an array

// Anonymous

let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
var oddd=function(){

let odds = arr.filter(n => n%2)
return odds;
}
console.log(oddd());

// IIFE
(function(){
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
var oddd=function(){

let odds = arr.filter(n => n%2)}

console.log(oddd());})();

// 5. Return all the prime numbers in an array 

// iife

(function(){
var array = [2, 3, 4, 5, 6, 7, 8, 9, 10]

var isPrime=function (num) {
  for (let i= 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}


console.log(array.filter(isPrime));})();

 
// Anonymous

    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    var isPrime=function (num) {
      for (let i= 2; num > i; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return num > 1;
    }
    
    console.log(array.filter(isPrime));

// 6. Remove duplicates from an array


// Anonymous

var array = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

var uniq=function (array) {
    return array.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}
console.log(uniq(array));
var array = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];

// IIFE

(function(){
var uniq=function (array) {
    return array.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}
console.log(uniq(array));})();

// IIFE
// 7.Rotate an array by k times

(function(){
var rotate=function  (arr, count = 1)  {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  };
  
  const arr = [1,2,3,4,5];
  
  console.log(rotate(arr, 1));  // [2, 3, 4, 5, 1]
  console.log(rotate(arr, 2));  // [3, 4, 5, 1, 2]
console.log(rotate(arr, -2));})(); // [4, 5, 1, 2, 3]


// Anonymous

var rotate=function  (arr, count = 1)  {
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  };
  
  const arr = [1,2,3,4,5];
  
  console.log(rotate(arr, 1));  // [2, 3, 4, 5, 1]
  console.log(rotate(arr, 2));  // [3, 4, 5, 1, 2]
console.log(rotate(arr, -2));