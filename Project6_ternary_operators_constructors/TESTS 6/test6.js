function count_Function() 
{
    document.getElementById("Counting").innerHTML  ="Three plus one using a counter =  "  +Count();
    function Count () {
        var Starting_point = 3;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
     }
}
