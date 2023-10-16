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
//   String anything in double quotes "hey this is a double qoute" or single qoutes 'hey this is a single qoute'
//   Numbers for example 8 or 10
//   Boolean true or false
//   float  15.66
//   null  no value but itt exists
//   undefined no value neither exists or may i say undefined
//   symbols

//  Composite
//   the composite data type includes:
//   Arrays
//   Objects
//   Functions
