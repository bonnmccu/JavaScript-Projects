function Ride_Function() 
{
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height <52) ?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+ " to ride.";
}

function fruit(Variety, Color, Origin)
{
    this.fruit_Variety=Variety;
    this.fruit_Color=Color;
    this.fruit_Origin=Origin;
}
var Apple = new fruit ("Macintosh", "Red", "Washington State");
var Pear = new fruit ("Bosc", "Green", "California");
var Banana = new fruit ("Marichua Gold", "Yellow", "Mexico"); 

function my_Function()
{
    document.getElementById("New_and_This").innerHTML =
    "I bought a " + Pear.fruit_Color + "-colored " + Pear.fruit_Variety + " grown in " + Pear.fruit_Origin;
}

function count_Function() //Nest example
{
    document.getElementById("Counting").innerHTML  ="Three plus one using a counter =  "  +Count();
    function Count () 
    { 
        var Starting_point = 3; //assigns variable
        function Plus_one() {Starting_point += 1;} //Nested Program
        Plus_one(); //calling the function
        return Starting_point; //returns result of Plus_one()as Count
     }
}
