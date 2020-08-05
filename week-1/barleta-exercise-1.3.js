/*
============================================
; Title:  barleta-exercise-1.3.js
; Author: Professor Krasso
; Date:   5 Aug 2020
; Modified By: Marie Nicole Barleta
; Description:
;===========================================
*/

// import statement
const header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Exercise 1.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

function CellPhone( manufacturer, model, color, price ) {

  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  this.getPrice = function(){
    return this.price;
  }

  this.getModel = function(){
    return this.model;
  }

  this.getDetails = function () {
    return "\n"+ "Manufacturer: " + this.manufacturer + "\n" +
    "Model: " + this.getModel()
    + "\n" + "Color: " + this.color
    + "\n" + "Price: " + this.getPrice();
  };
}

var cellPhone = new CellPhone( "Apple", "iPhone 7", "Jet Black", "$770.99");


console.log( cellPhone.getDetails() );

// end program
