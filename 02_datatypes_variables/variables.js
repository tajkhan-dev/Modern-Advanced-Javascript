// What is a variable in javascript?
// In JavaScript, a variable is a container that you can use to store and manipulate data.

// their are three ways to create a variable i.e
// var
// let
// const

country = "United States"; // Same as with the "var" keyword

// *** usign var keyword ***
var myname = "jamstack developer"; // Can be redeclared and reassigned
myname = "hollow"; //allowed to reassign
var myname = "homelander"; // Allowed to redeclare

// *** usign let keyword ***
let myage = 19; // Can be reassigned only
myage = 22; //allowed
let myage = 30; // Error !!! cannot be redeclared

// *** usign const keyword ***
const city = "california"; // neither be redeclared nor reassigned its value constant
city = "washington D.C"; //TypeError: Assignment to constant variable.
const city = "Newyork"; // Error !!! cannot redeclare

// *** Datatypes ***
// their are two type of data types in javascript i.e

//  Primitive

//   primitive datatypes include :
//   String: anything in double quotes "hey this is a double qoute" or single qoutes 'hey this is a single qoute'
let variable1 = "this is a string with double quotes";
variable1 = 'this is me a string with a single quotes';
variable1 = "7"; //also a string not a number

//   Numbers for example 8 or 10
let phone=913882384;

//   Boolean true or false
let isGrownup=true;
isGrownup=false

//   float  15.66
let rollno=55.44;

//   null  no value but it exists
let weakness=null;

//   undefined no value neither exists or may i say not defined
let future=undefined;
//   symbols

//  Composite
//   the composite data type includes:
//   Arrays
//   Objects
//   Functions

// we will talk about the composite types in the later chapters
