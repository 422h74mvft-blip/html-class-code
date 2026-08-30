// String Manipulation Functions://


function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"



function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("JavaScript")); // Output: 10


function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalizeWords("time for writing code")); // Output: "Time For Writing Code"


// Array Functions://


function findMaximum(arr) {
  return Math.max(...arr);
}

function findMinimum(arr) {
  return Math.min(...arr);
}

const numbers = [4, 2, 9, 1, 5];
console.log(findMaximum(numbers)); // Output: 9
console.log(findMinimum(numbers)); // Output: 1


function sumOfArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15



function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example: Filtering out odd numbers to only keep even ones
const nums = [1, 2, 3, 4, 5, 6];
const isEven = num => num % 2 === 0;
console.log(filterArray(nums, isEven)); // Output: [2, 4, 6]


// Mathematical Functions//
function factorial(n) {
  if (n < 0) return "Undefined for negative numbers";
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i; // Equivalent to: result = result * i
  }
  return result;
}

console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)






function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a divisor, not prime
    }
  }
  return true; // No divisors found, it is prime
}

console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false





function generateFibonacci(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];
  
  const sequence = [0, 1]; // Start with the first two numbers
  
  for (let i = 2; i < terms; i++) {
    // Add the two previous numbers to get the next one
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }
  
  return sequence;
}

console.log(generateFibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]