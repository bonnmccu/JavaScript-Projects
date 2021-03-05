
function multiplication() { //mult example
    var simple_Math = 6 * 8;  //variable assignment
    document.getElementById("Math").innerHTML = "6 x 8 =" + simple_Math; //get element
}

function division() { //div example
    var simple_Math = 63 / 7;  //variable assignment
    document.getElementById("Math1").innerHTML = "63 / 7 =" + simple_Math; //get element
}

function addition() { //add example
    var addition = 8 + 3;
    document.getElementById("Math2").innerHTML = "8 + 3 =" + addition;
}

function subtraction() {  //subtr example
    var subtraction = 63 - 18;
    document.getElementById("Math3").innerHTML = "63 - 7 =" + subtraction;

}
function negation_Operator() {  //negation example 
    var Z = 26;
    document.getElementById("Math4").innerHTML = "Negative 26 = " + -Z;

}
function increment() //JS increment
{
    var I =20;
    I++;
    document.getElementById("incr").innerHTML= "20 + 1 =" + I;
}

function decrement() //JS decrement
{
    var D =20;
    D--;
    document.getElementById("decr").innerHTML= "20 - 1 =" + D;

}
function random() //random # example example
{
    Math.random();  //variable assignment
    document.getElementById("rand").innerHTML= "A random number between 0 and 1 =" + Math.random();
}


