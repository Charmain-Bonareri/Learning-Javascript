// First lesson is learning how to comment
// This is an inline comment

/* This is a multi-line comment that begins here.
One
Two
Three
Four
We close the multi-line comment here. */


/* Data Types:
undefined, null, boolean, string, symbol, number, and object */




//to declare a variable you can use the keyword var

var myName = "Charmain" // var can be used throughout our whole program.
myName = "Mogere"

let ourName = "Mogeres" //let will only be used within the scope of where you declared that.

const pi = 3.14 // a variable that can never be changed.



// Storing Values with Assignment Operator

//Assigning variables;
var a;

console.log(a)


//Declaring variables
var b = 2; // 2 is being assigned to b

a = 7; //we don't need to declare a, we just assign it with values.


b = a; // assigned contents of a to b

console.log (a) //allows you to see things in the log
console.log (b)



//Initializing Variables w/ Assignment Operator
var a = 5; //var a is declaring it and = 5 is initializing it
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + "String!";

console.log(b)
console.log(c)


// Case Sensitivity in variables

var studingJavaToday;
var properCamelCase;
var titleCaseOver;

studingJavaToday = 10;
properCamelCase = "A String";
titleCaseOver = 9000;



// Adding numbers

var sum = 10 + 10;
console.log(sum)


// Subtracting numbers

var difference = 45 - 33
console.log(difference)


// Multiplying numbers

var multiplication = 112*2;
console.log(multiplication)


// Dividing numbers

var quotient = 66/10;
console.log(quotient)



//Incrementing numbers
var myVar = 87;

//myVar = myVar + 1; //instead of going this long way we can say

myVar++
console.log(myVar)


//Decrementing numbers
var myVarTwo = 11;

myVarTwo--
console.log(myVarTwo);


// Decimal numbers in Js can also be called floating numbers or floats
var ourDecimal = 5.7;

var myDecimal = 0.009;

var product = 2.0*2.5;
console.log(product)



//The remainder operator looks like a % sign, and it gives the remainder of the division of two numbers
var remainder;
remainder = 11%3;
console.log(remainder)
//The remainder operator is often used to determine whether the number is odd or even.


// AUGMENTED MATH OPERATIONS
// Compound Assignment with Augmented Addition
var aa = 3;
var bb = 17;
var cc = 12;

aa = aa + 12;
bb = bb + 9;
cc = cc + 7;

console.log(aa);
console.log(bb);
console.log(cc);


aa += 10; // now we are adding the value to the variable and assigning the answer to that variable.
bb += 10;
cc += 10;

console.log(aa);
console.log(bb);
console.log(cc);

// Compound Assignment with Augmented Subtraction
var a = 11;
var b = 9;
var c = 3;

a -= 6;

console.log(a);

var a = 20;
console.log(a);

// Compound Assignment with Augmented Multiplication
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;

console.log(a);
console.log(b);
console.log(c);


//Declaring String Variables
var myFirstName = "Charmain";
var myLastName = "Bonareri";



//Escaping a quote in a string
// var myStr = "I am a"double quoted" string inside "double quotes"

//put a backlash infront of the quotation marks
var myStr = "I am a\"double quoted\" string inside \"double quotes"
console.log(myStr);

var anotherString = 'Trying this "double quotes" thing by starting with single quotes and putting "double quotes inside"'
console.log(anotherString);


// Escaping Sequences in Strings
var myStr = "FirstLine\n\t\\SecondLine\n\ThirdLine"
console.log(myStr);


// Plus operator (+)
var myStr = "This is the start. " + "This is the end."
console.log(myStr);

// Bracket notation is a way to get a specific character in a string
var firstLetterOfFirstName = "";
var firstName = "Charmain";

firstLetterOfFirstName = firstName [0]; // most programming languages start counting at 0 which refers to zero based indexing

var firstLetterOfLastName = "";
var lastName = "Mogere";

firstLetterOfLastName = lastName [0];
console.log(firstLetterOfLastName);

//Concatenating Strings with Plus Equals Operator



//String Immutability - strings are immutable meaning they cannot be altered once they are created. 

var myStr = " Jello World"

myStr[0] = "H"; // you can't change a single word in the string

myStr = "Hello World";
console.log(myStr);


// Bracket Notation to find nth Character in String
var firstLetterOfFirstName = "";
var firstName = "Charmain";

firstLetterOfFirstName = firstName [2]; 

var firstLetterOfLastName = "";
var lastName = "Mogere";

firstLetterOfLastName = lastName [1];
console.log(firstLetterOfLastName);

// Bracket Notation to find last Character in String
var firstName = "Charmain";
var lastLetterOfFirstName = firstName [firstName.length - 1]; // -1 is going to be last index of the name

var lastName = "Mogere"
var lastLetterOfLastName = lastName [lastName.length -1];




