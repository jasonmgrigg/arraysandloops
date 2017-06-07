// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = 'soccer', 'baseball'
// total = 'soccer', 'baseball', 'football', 'swimming'


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString(){
  let longestWord = "";

  for( i=0; i < strings.length; i++){
    if(strings[i].length > longestWord.length){
        longestWord = strings[i];
    }

  }
   return longestWord;
}

longestString();





//==========================================================

// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

function smallestNumber() {
  var i;
  var l;
  var min;
  min = Number.MAX_VALUE;

  for (i = 0, l = numbers.length; i < l; i++) {
  min = Math.min(min, numbers[i]);
  }
  return min;
  }

  smallestNumber();

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

var evens = [];

function getEvens() {

  for (i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

getEvens();
console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});





// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:


function reverseNumbers() {
  return numbers.reverse()
  }

reverseNumbers()

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
var total = 0;

function sumOfArray() {
  for ( var i = 0; i < numbers.length; i++ ){
    total += numbers[i];
    }
    return total
  }

sumOfArray(numbers)


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
var total = 0;
var greaterThanTen = [];

function sumGreaterTen() {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      greaterThanTen.push(numbers[i]);
      total += numbers[i];
    }
  }
  return total
}
sumGreaterTen();


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

var total = 0;
var greaterThanFun = [];

function sumGreaterFun(num) {
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > num) {
      greaterThanFun.push(numbers[i]);
      total += numbers[i];
    }
  }
  return total
}
sumGreaterFun(11);



console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays() {
  newNumbers = numbers.concat(numbersTwo)
  return newNumbers
}

joinArrays()


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
// instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];
// instructorThree = 'Brit'




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

//So I read a question wrong and got the even numbers and added them up, so I'm going to include it!

var numbers = [1,12,4,18,9,7,11,3,101,5,6];



var total = 0;
var evens = [];

function sumEvens() {
  for (i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      evens.push(numbers[i]);
      total += numbers[i];
    }
  }
  return total
}
sumEvens();
