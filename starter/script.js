// strict mode - helps identify erros

"use strict";

// let hasDriversLicense = false; // a person has no drivers license
// const passTest = true; // set to has passed the test

// if (passTest) hasDriverLicense = true //if pass test is true set has drivers license to true
// if (hasDriversLicense) console.log('I can drive :D'); //if drivers license = true log

// functions

// function logger() {

//     console.log('My name is Abas')
// }

// // calling / runnig / Invking
// logger();
// logger();

// // fuctions with parameters

// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

// // creating a variable that captures values and logging the variable.
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// // logging dirrectly
// console.log(fruitProcessor(5, 0));

// // reusing
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// fuctions declarations vs expressions

// function calcAge1(birthYear) {
//     return 2037 - birthYear;

// }

// const age1 = calcAge1(1999);
// console.log(age1);

// Arrow function -added to ES6  - shorter and faster to write

// single variable
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// Multiple vaiables
// const yearsUntilRetirement = birthYear =>{
//     const age = 2037 - birthYear
//     const retirement = 65 - age ;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1999));

// Multiple paramater
// const yearsUntilRetirement = (birthYear, firstName) =>{
//     const age = 2037 - birthYear
//     const retirement = 65 - age ;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1999, 'Abas'));
// console.log(yearsUntilRetirement(1990, 'Bob'));

// Function Calling Other Functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){

//     const applePieces = cutFruitPieces (apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// Coding challange 1

// const calcAverage = (score1, score2, score3) => {
//   (score1 + score2 + score3) / 3;
// };

// const avgDolphins = calcAverage(score1, score2, score3);
// const avgKoalas = calcAverage(score1, score2, score3);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphin} against ${avgKoalas}koalas`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} against ${avgDolphin} Dolphin`);
//   } else {
//     console.log("No team wins...");
//   }

//   const scoreDolphins1 = calcAverage(44, 23, 71);
//   const scorekoalas1 = calcAverage(85, 54, 41);
//   checkWinner(scoreDolphins1, scorekoalas1);
// };

// Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// coding challange #1

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

// Arrays

// const friends = ["Michael", "Steven", "Peter"]; //literal syntax

// console.log(friends);

// // another way
// const y = new Array(1991, 1998, 2008, 2020); //using new keyword

// console.log(friends[0]);

// console.log(friends.length); //amount of elements in the array.

// console.log(friends[friends.length - 1]); //getting last element

// // array holding diffrent value
// const firstName = "William";
// const tindel = [firstName, "Tindel", 2037 - 2020, "footballer", friends];

// console.log(tindel);

// // Array Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age4 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age4);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// // Array methods  - operators
// const friends = ["Michael", "Steven", "Peter"];
// //Adds element at the end of the array
// friends.push("Jay");
// console.log(friends);

// //Adds element at the begining of the array
// friends.unshift("John");
// console.log(friends);

// //Removes the last element of the array
// friends.pop();
// console.log(friends);

// //Removes the first element of the array
// friends.shift();
// console.log(friends);

// // Finds index of an element
// console.log(friends.indexOf("Steven"));

// // Includes - returns true if the element is in the array and false if the array is not.
// console.log(friends.includes("Bob"));

// // Used to write conditionals
// if (friends.includes("Peter")) {
//   console.log("You have friend called peter");
// }

// Codding challange 2
// const calcTip = (bill) => {
//   return bill <= 50 && bill >= 300 ? 0.15 * bill : 0.2 * bill;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(totals);

// // Introduction to objects - define (key/properties) value pairs.
// const tindel = {
//   firstName: "Tindel",
//   lastName: "Wiliam",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// // Retrive data and change data from an object using dot and bracket notation
// // .dot notation

// // console.log(tindel.lastname);
// // console.log(tindel["lastname"]);

// // const nameKey = "Name";
// // console.log(tindel["first" + nameKey]);
// // console.log(tindel["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Tindel? Choose between firstname , lastName, age, job, friends"
// );

// console.log(tindel[interestedIn]);
// // js replaces replaces intrestedIn wth actual value (value chosen by user) with the value from the object

// // adding new properties to an object
// tindel.location = "nairobi";
// tindel["twitter"] = "@nairobi";
// console.log(tindel);

// // Challange
// // "Tindel has  3 friends, and his best friend is called Michaeal"
// console.log(
//   `${tindel.firstName} has ${tindel.friends.length} frinds and his best friend is called ${tindel.friends[0]}`
// );

// Object Methods - function attached to an object

const tindel = {
  firstName: "Tindel",
  lastName: "Wiliam",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  //   //this  references the object (console.log - loads the whole object).
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // method to return has drivers license

  getSummary: function () {
    return `${tindel.firstName} is a ${tindel.age}-year old ${
      tindel.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

tindel.calcAge();
console.log(tindel.age);
console.log(tindel.age);
console.log(tindel.age);

// Challange
//Tindel is a 46-year old teacher, and he has a driver's license

console.log(tindel.getSummary());

// Challange 3
const mark = {
  fullName: "Mark Miller",
  mass: "78",
  height: "1.69",
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: "92",
  height: "1.95",
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// claculate BMIs
mark.calcBMI();
john.calcBMI();

// Log on the persona eith the higher BMI
const result =
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI ${mark.calcBMI().toFixed(1)} is higher than ${
        john.fullName
      }'s ${john.bmi.toFixed(1)}! `
    : john.bmi > mark.bmi
    ? `
${john.fullName}'s BMI ${john.bmi.toFixed(1)} is highre than${
        mark.fullName
      }'s ${mark.calcBMI().toFixed(1)}! `
    : `${mark.fullName} and ${
        john.fullName
      } have the same BMI (${mark.bmi.toFixed(1)})!`;

console.log(result);
