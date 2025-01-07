/*
let js ='amazing';
console.log(js);
console.log(40 + 8 + 23 - 10);
*/

/*
// Values and Variables
const now = 2037;
const ageJonas = now - 1991;
console.log(ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > 18); // >, <, >=, <=

const isFullAge = ageJonas >= 18;

console.log(now - 1991 > now - 2018);
*/

//Challenge 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
*/

/*
// Strings and Template Literals
const firstName = 'Vipach';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const vipach = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(vipach);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);
*/

/*
const inputYear = '2001'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
*/

/*
const age = 18;
if (age === 18) console.log('You became an adult');
const favourite = prompt("What's your favourite number");
console.log(favourite);
*/

//Challenge 3
/*
const scoreDolphins = (96+ 108 + 89) / 3;
const scoreKoalas = (88+ 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins){
    console.log('Koalas win the trophy');
} else if (scoreKoalas === scoreDolphins){
    console.log('Both win the trophy');
} else{
    console.log('No one wins the trophy');
} */

    
