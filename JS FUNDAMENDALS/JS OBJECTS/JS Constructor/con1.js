//Constructor function
"use strict";

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");


console.log(user.name); // Jack
console.log(user.isAdmin); // false
