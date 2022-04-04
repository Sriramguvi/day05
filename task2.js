// 1. Sum of all numbers in an array 

// Arrow function

var sum=(a,b,c)=>{
    return a+b+c;

}
console.log(sum(2,3,4));

// 2.quiz :Return all the palindromes in an array

var words=["ram","madam"];
var ses=(str)=> { //function that checks if palindrome or not
    return str == str.split('').reverse().join('');
}

const result = words.filter(word => ses(word));
console.log(result);

// 3.quiz b:Convert all the strings to title caps in a string array


var titleCase=(str)=> {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  }
  console.log(titleCase('iron man'));

  // 4.Print odd numbers in an array



let arr = [1,2,3,4,5,6,7,8,9,10,11,12]
var oddd=()=>{

let odds = arr.filter(n => n%2)
return odds;
}
console.log(oddd());

// 5. Return all the prime numbers in an array 


var array = [2, 3, 4, 5, 6, 7, 8, 9, 10]
    
var isPrime= (num) =>{
  for (let i= 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));
