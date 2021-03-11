function full_Sentence () //concatenating strings - example 155
    {
        var part_1 = "I have linked "; //sets variables (string) values
        var part_2 = "these variables ";
        var part_3 = "into a complete ";
        var part_4 = "sentence.";
        var whole_sentence = part_1.concat(part_2, part_3,part_4); //creates variable sentence by linking 4 parts
        document.getElementById("Concatenate").innerHTML = whole_sentence; //link to display in html
    }

function slice_Method () //slice strings - example 158
    {
        var Sentence = "All work and no play makes Johnny a dull boy."; //sets var sentence 
        var Section = Sentence.slice(27,33); //defines splice to display
        document.getElementById("Slice").innerHTML = Section; //link to display in html
    }

    function string_Method () //string example - example 161
    {
        var X = 188; //sets var 
        document.getElementById("Numbers_to_string").innerHTML = X.toString(); //link to display in html
    }
    function precision_Method() // precision example - example 163
    {
        var Y = 12574.456987123; //sets var to more than 10 places
        document.getElementById("Precision").innerHTML =Y.toPrecision(10); //link to display in html to 10 places only
    }