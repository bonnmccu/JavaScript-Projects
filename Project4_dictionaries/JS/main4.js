function my_Dictionary() //defines the function
    {
    var Pet = {    //object
        Species:"Feline",  //Key-Value pairs
        Breed:"Short Hair",
        Color:"Black and White",
        Age:4,
        Sound:"Meow!"
    };
    delete Pet.Species; //delete statement for KVP
    document.getElementById ("Dictionary").innerHTML = Pet.Species; //initial get element

}
