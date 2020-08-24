/*
============================================
; Title:  barleta-exercise-3.2.js
; Author: Professor Krasso
; Date:   24 Aug 2020
; Modified By: Marie Nicole Barleta
; Description: The Factory Pattern
;===========================================
*/

// import statement
const header = require('../barleta-header.js');

console.log(header.display("Marie", "Barleta", "Exercise 3.2"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }
 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

//start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

function Oracle (properties){
  this.username = properties.username || 'admin';
  this.password = properties.password || 'o-s3cret';
  this.server= properties.server || 'localhost:5454';
  this.version = properties.version || '10g';
}

function Informix(properties){
  this.username = properties.username || 'admin';
  this.password = properties.password || 'in-s3cret';
  this.server = properties.server || 'localhost:3030';
}
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === 'MySql'){
    this.databaseClass = MySql;
  }
  if (properties.databaseType === 'Oracle'){
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === 'Informix'){
    this.databaseClass = Informix;
  }
  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "nicolebarleta",
  password: "admin123467"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "nicolebarleta",
  password: "admin1234567"
});


console.log(oracle);
console.log(informix);
//end program
