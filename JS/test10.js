
//Let example STEP  220
let purse = 
 {
    brand: "Gucci ",
    style: "evening bag ",
    price: "$4800.",
    season: "Spring ",
    color: "caramel ",
    description : function()
     {
    return "This purse is a " + this.brand + this.style + "for " +
    this.season + "priced at " + this.price;
    }
}
 alert (purse.description);