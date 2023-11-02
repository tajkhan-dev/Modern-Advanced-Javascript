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

// *** LOGICAL OPERATORS ***

// AND && operator :this operator finds the first falsy value and print it. In order for it to return true both the values must be true
let a = true;
let b = false;

console.log(a && b); // false

b = a; // now both b and a are true

console.log(a && b); // true because values on both side are true otherwise every answer returned by  the AND && operator will be false

// OR || operator : this operator finds the first truthy value and print it. In order for it to return true either of the values must be true
let c = true;
let d = false;

console.log(c || d); // true because it only needs one truthy value

d = c; // now both d and c are true

console.log(c || d); // true because values on both side are true otherwise every answer returned by OR || operator will be false

// NOT ! operator : this operator inverts the truthiness of the value it precedes. If the value is truthy, the NOT operator will make it falsy, and vice versa.
let e = true;

console.log(!e); // false

e = false; // now e is false

console.log(!e); // true because the value of e is now falsy
