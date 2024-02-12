
// strict mode - helps identify erros

'use strict';

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
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999)
console.log(age3)

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

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){

    const applePieces = cutFruitPieces (apples); 
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
