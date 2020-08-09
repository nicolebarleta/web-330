/*
============================================
; Title:  barleta-exercise-1.4.js
; Author: Professor Krasso
; Date:   8 Aug 2020
; Modified By: Marie Nicole Barleta
; Description:
;===========================================
*/

// import statement
const header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Exercise 1.4"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!
 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>
*/

// start program

function Car(model) {
  this.model = model;
}
Car.prototype.start = function()
{
  console.log("Car added to the race track!");
}
function Truck(model, year){
  this.model = model;
  this.year = year;
}
Truck.prototype.start = function()
{
  console.log("Truck added to the race track!");
}
function Jeep(model, year, color){
  this.model = model;
  this.year = year;
  this.color = color;
}
Jeep.prototype.start = function()
{
  console.log("Jeep added to the race track!");
}

var racetrack = [];

function driveIt(vehicle)
{
    vehicle.start();

    racetrack.push(vehicle);
}

var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018");
var wrangler = new Jeep("Wrangler", "2016", "White");


console.log("")

driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);


console.log("\n -- The following vehicles have been added to the racetrack --")

for(var x = 0; x < racetrack.length; x++)
{
console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}
// end program
