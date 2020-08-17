/*
============================================
; Title:  barleta-exercise-2.2.js
; Author: Professor Krasso
; Date:   17 Aug 2020
; Modified By: Marie Nicole Barleta
; Description: Prototype
;===========================================
*/

// import statement
const header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Exercise 2.2"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// start program

var person =
{
  getAge: function ()
  {
    return this.age;
  }
};

var robert = Object.create(person, {
  "age":
  {
      "value": "46"
  },
  "fullname":
    {
    "value": "Robert Schumann"
    }
});

robert.getAge();
console.log("The person's full name is: '%s'", robert.fullname);
console.log("The person's age is '%s'", robert.age);
// end program
