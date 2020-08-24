/*
============================================
; Title:  barleta-exercise-3.3.js
; Author: Professor Krasso
; Date:   24 Aug 2020
; Modified By: Marie Nicole Barleta
; Description: The Singleton Pattern
;===========================================
*/

// import statement
const header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Exercise 3.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Same database instance? true
*/

// start program

var DatabaseSingleton = (function() {
  var instance;

  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

function databaseSingletonTest()
{
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();

    console.log("Same database instance? %s", oracle === postgres)
}

databaseSingletonTest();
// end program
