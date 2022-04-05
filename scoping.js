//Global Scope and Functions
/* 
In a global scope the variable is declared outside the function and can be accessed anywhere in our file.
*/
var myGlobal = 10;

function fun1(){
  oopsGlobal = 5;
}

function fun2(){
    var output = "";
    if (typeof myGlobal !="undefined"){  //!= operator not equal
        output += "myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal !="undefined"){
        output += "oopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();  

//Local Scope and Functions
/*
In a local scope, the variable is declared inside the function and can only be accessed inside that function.
*/

function myLocalScope (){
    var myVar = 5;  //myVar is only visible inside the function
    console.log(myVar);
}
myLocalScope();

//console.log(myVar); //if you log outside the function it returns myVar is not defined.

//Global vs. Local Functions

/*
It is possible to have local and global functions with the same variable, but the local function will take precedence.
*/

var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "Sweater"
    
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);