//function invcation and variable environment

// first the program will create a memory space for variable = x and functions = a,b.
// x -> undefined
// a() -> {...} pointing to the function code.
// b() -> {...} 
var x=1; // x -> undefined chaanges to x -> 1

//Global execution context(GEC)

a();// in the new GEC x value will be 10 and log to screen and then GEC will be deleted 

b();// in the new GEC x value will be 100 and log to screen and then GEC will be deleted 
console.log(x); // The value of x -> 1 will be log to screen

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}


// now there is nothing is left to execute then the js engine will Delete the main GEC 