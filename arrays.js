// Store Multiple Values with Arrays - Arrays allows you to store several pieces of data in one place.

var ourArray = ["John", 23]; // elements in an array can be any data type

var myArray = ["Quincy", 1];


// Nested Arrays - an array inside an array
var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23],["Chicago", 14]];



// Access Array with Data Indexes

var ourArray = [50,60,70];
var ourData = ourArray[0]; //equals 50

var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData);



//Modify Arrays with Data Indexes
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

var myArray = [18, 64, 99];
myArray[2] = 100;

console.log(ourArray);
console.log(myArray);



// Access Multi-Dimensional Arrays with Indexes

var myArray = [[1,2,3], [4,5,6], [7,8,9],[[10,11,12],13,14]];

var myData = myArray[0][0];
console.log(myData);


var herData = myArray[2][1];
console.log(herData);


// push() - you can append data to the end of a function using the push()

var ourArray = ["Stimpson", "J", " Cat"];
ourArray.push(["happy","joy"])

console.log(ourArray);

//pop() - removes something from the array
var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();

console.log(ourArray);

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

console.log(myArray);

//shift() - removes the first element in our array

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

//removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

var myArray = [["John, 23"], ["dog, 3"]];
var removedFromMyArray = myArray.shift();