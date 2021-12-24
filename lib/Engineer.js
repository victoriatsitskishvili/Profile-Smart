// To import an Employee constructor //
const Employee = require("./Employee");

// Using a class keyword to write a constructor function //
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Calling employee constructor by using the super keyword (is how we can reference the parent object) //
        super (name, id, email);

        this.github = github; 
    }

    // // Return github from input //
    getGithub () {
        return this.github;
    }

     // Employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// To export a module //
module.exports = Engineer; 