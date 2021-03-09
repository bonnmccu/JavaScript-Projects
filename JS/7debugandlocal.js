function Add_numbers_1() 
{ 
    var A = 10; //local variable -inside the main function
    document.write(15 + A + "<br>"); 
}
function Add_numbers_2() //function 2
{
    document.write(A + 100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");
document.write("<br>");

function Add_numbers_1() //debug example - returns A is not defined
{ 
    var A = 7; 
    console.log(15 + A ); 
}
function Add_numbers_2() //function 2
{
    console.log(A + 100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");
document.write("<br>");


