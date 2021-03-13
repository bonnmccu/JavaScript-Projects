//Counter
function loop() 
{
    var Digit = ""; //starts at one and adds one and repeats the
    var X = 1;
    while (X < 11) { //repeats loop until X=10
        Digit += "<br>" +X;  //adds one to X
        X++; 
    }
    document.getElementById("Loop").innerHTML =Digit; //prints digits up to 10
}
//Instrument Loop step 200
var Instruments = ["Drums", "Harmonica", "Piano", "Accordian", "Trumpet","Flute"];
var Content =""; //variables defined
var Y;
function instrument_loop()
    {
        for (Y = 0; Y < Instruments.length; Y++) 
        {
        Content += Instruments[Y] +"<br>";//Content var retrieves the list of strings def under "Instuments"
        document.getElementById("Instrument_Loop").innerHTML = Content; // var Content sent to html & displayed
    }
    
}
//ARRAY FUNCTION STEP 204
function array_function()
{
    var Photo_Array =[] //sets var defining the array
    Photo_Array [0]="mountain" //defines items in array
    Photo_Array [1]="brook"
    Photo_Array [2]="seaside"
    Photo_Array [3]="sunset"
    Photo_Array [4]="waterfall"
        
    document.getElementById("Array").innerHTML = "This is a picture of a " +
    Photo_Array [3] +"."; //sends [3] to html and displays "sunset"   
}
function constant_function() //CONST example
{
    const Vintage_Purse = {type: "evening bag", brand: "Gucci", color: "tan"}; //
    Vintage_Purse.price ="$4800.";
    Vintage_Purse.season ="Spring"; 
    Vintage_Purse.color ="caramel";
 
    document.getElementById("Constant").innerHTML = "The cost of the  " +
    Vintage_Purse.color + " " + Vintage_Purse.type + " is " + Vintage_Purse.price;
   
}