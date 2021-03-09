var A = 7; //global variable -outside the main function
function Add_numbers_1() 
{ 
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

function Age_Function() //Voting exersize Else Assign 148
{ 
    Age = document.getElementById("Age").value; //gets and checks age
     if (Age>= 18)
     {
      Vote = "You are old enough to vote!";//prints if input > or = 18
     }
     else 
    { 
     Vote = "You are not old enough to vote"; //prints if false or <18
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
 }

 //JS Step 150

 function Time_Function()
{ 
    var Time = new Date().getHours(); //using getHours function 
    var Reply;
     if (Time < 12 == Time >0) //setting up reply conditions using the equality operator
     {
         Reply = "It's morning!";
     }
     else if (Time >= 12 == Time <18) //afternoon conditions
     {
        Reply = "It's afternoon!";  
     }
     else 
     { 
        Reply = "It's evening!"; //response if both of the above are false 
     }
    document.getElementById("Time_of_day").innerHTML = Reply; // link to html - prints appropriate reply
 }











