// *** Operators ***

// Assigment Operators i.e =
let x = 10; // = is used for Assignment and it assigns the 10 to variable x

// Basic Math Operators i.e +, -, *, /

let number1 = 5;
let number2 = 7;
console.log(number1 + number2); // returns 12 Addition Operator plus is used
console.log(number1 - number2); // returns -2 Subtraction Operator minus is used
console.log(number1 * number2); // returns 35 Multiplication Operator times is used
console.log(number1 / number2); // returns 0.8 Division Operator slash (/) is used

console.log(number1 % number2); // returns 1 (the reminder of the answer after dividing it) Modulus Operator percentage "%" is used

// Exponentiation Operator **

let base = 2;
let exponent = 3;
console.log(base ** exponent); // returns 8 (2 to the power of 3)

// Increment Decrement operators ++ --
let number3 = 10;
++number3; // increment by one
console.log(number3); // returns 11
--number3; // decrement by one
console.log(number3); // returns 10 since number3 was now 11 at line number 22

// pre-increment /decrement and post-increment/decrement

let num4 = 9;
num4++; // post increment
console.log(num4); //returns 10 because we have done pre-increment operation which means first value will be returned then incremented

++num4; // pre increment
console.log(num4); // returns 11 obviously because of post increment above

let num5 = 9;
num5--; // post decrement
console.log(num5); // 8 due to post decrement

--num5; // pre decrement
console.log(num5); // 6 due to pre decrement
