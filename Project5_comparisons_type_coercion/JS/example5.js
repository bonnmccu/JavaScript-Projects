
function my_Function() //NaN example
{ 
    document.getElementById("Test").innerHTML = 0/0
}

function my_Function2() //NaN() - string example
{ 
    document.getElementById("Test2").innerHTML = isNaN("This is a string");
}

function my_Function3() //NaN - number 
{ 
    document.getElementById("Test3").innerHTML = isNaN("0010");
}

function my_Function4() //Infinity
{ 
    document.getElementById("Test4").innerHTML = ("2E301");
}

function my_Function5() //Negative infinity
{ 
    document.getElementById("Test5").innerHTML = ("-2E301");
}

function my_Function6() //Boolean "false" example
{ 
    document.getElementById("Test6").innerHTML = (10<4);
}

function my_Function7() //Boolean "true" example
{ 
    document.getElementById("Test7").innerHTML = (10>4);
}

function my_Function8(Test8) //Console example
{ 
   console.log(3+3);
}

function my_Function9(Test9) //Console-Boolean "false" example
{ 
    console.log(10<4);
}

function my_Function10() //== "true" example
{ 
    document.getElementById("Test10").innerHTML = 12==12;
}

function my_Function11() //=="false" example
{ 
    document.getElementById("Test11").innerHTML = 12==10;

}
function not_Function() //not operator example STEP 123 false
{ 
   document.getElementById("Not").innerHTML = !(25 > 15); 
}
function not_Function2() //not operator example STEP 123 true
{
    document.getElementById("Not2").innerHTML = !(25 < 15);
}