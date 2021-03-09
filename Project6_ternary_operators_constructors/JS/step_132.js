function Vehicle(Make, Model, Year, Color)
   {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", "2019", "Black and White");
var Eric = new Vehicle ("Ford", "Pinto", "1971", "Mustard");

function my_Function()
{
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Eric drives a " + Eric.Vehicle_Color + "-colored " +Eric.Vehicle_Model + " manufactured in " + Eric.Vehicle_Year;
}