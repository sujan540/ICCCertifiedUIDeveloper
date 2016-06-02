/**
 * Created by sujan on 6/2/16.
 */
/*Using an Object Literal*/
var car1 = {
    brand:"Toyota",
    model:"Camery",
    year:"2016",
    color:"Black",
    price:25000
};
console.log("/*Using an Object Literal*/")
console.log(car1);
console.log("Brand : "+car1.brand);
console.log("Model : "+car1["model"]);

/*Using new Keyword*/
var car2 = new Object();
car2.brand="Honda";
car2.model="Civic";
car2.year="2016";
car2.color="White";
car2.price=25000;
car2.getDescription= function (){
    return "Brand:"+ this.brand +"\nModel:"+this.model+"\nPrice:"+this.price;
}

console.log("/*Using new Keyword*/")
console.log(car2);
console.log("Brand : "+car2.brand);
console.log("Model : "+car2["model"]);

/*Using an Object Constructor*/
function Car(brand, model, year, color,price){
    this.brand=brand;
    this.model=model;
    this.year=year;
    this.color=color;
    this.price=price;
}
var car3= new Car("Ford","Taurus","2012","Red",20000);
console.log("/*Using an Object Constructor -1*/")
console.log(car3);
console.log("Brand : "+car3.brand);
console.log("Model : "+car3["model"]);

console.log("/*Using an Object Constructor -2*/")
var car4= new Car("Audi","XXXXX","2015","Gray",30000);
console.log(car4);
console.log("Brand : "+car4.brand);
console.log("Model : "+car4["model"]);

/*Adding new properties*/
car1.title = "clean";
car2.title= "salvage";
car3.title= "rebuilt";
car4.title= "clean";

console.log("/*Adding new property title*/");
console.log(car1);
console.log(car1.title);
console.log(car2);
console.log(car2.title);
console.log(car3);
console.log(car3.title);
console.log(car4);
console.log(car4.title);

/*Deleting properties*/
console.log("/*Deleting property title for car1*/");
console.log(delete car1.title);
console.log(car1);

/*Adding methods to Objects*/
console.log("/*Adding method(getDescription()) to car1 Object*/");
car1.getDescription = function (){
    return "Brand:"+ this.brand +"\nModel:"+this.model+"\nPrice:"+this.price;
}
console.log("/*Car1 Description*/");
console.log(car1.getDescription());

/*Adding prototype property to Constructor created object*/
console.log("/*Adding prototype property to Constructor created object*/");
Car.prototype.getDescription = function(){
    return "Brand:"+ this.brand +"\nModel:"+this.model+"\nPrice:"+this.price+"\nColor:"+this.color+"\nTitle:"+this.title;
};
console.log("/*Car3 Description*/");
console.log(car3.getDescription());
console.log("/*Car4 Description*/");
console.log(car4.getDescription());

console.log("/*Car2 Description*/");
console.log(car2.getDescription());
