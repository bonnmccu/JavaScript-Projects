function get_Date()
{ 
    var hour = new Date().getHours();
    var greeting;
     if (hour =  18)
     greeting = "Have a good day";
     else 
    { 
    greeting = "Have a good evening";
    }
    document.getElementById("Greeting").innerHTML = greeting;
 }




