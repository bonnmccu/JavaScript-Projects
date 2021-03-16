function Color_Function()
{
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color:";
    switch(Colors) {
        case "Red":
            Color_Output = "Red"  + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" +  Color_String;
        break;
        case "Purple":
            Color_Output = "Purple"  + Color_String;
        break;
        case "Aqua":
            Color_Output = "Aqua"  + Color_String;
        break;
        case "White":
            Color_Output = "White"  + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written from the above list.";
    }

            document.getElementById("Output").innerHTML = Color_Output;

    }
//getElement by class example

function Hello_World_Function()
{ 
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient for canvas
var grd = ctx.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 400, 250);


   // Circle Assign
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(200,110,80,0,2*Math.PI);
    ctx.stroke();


