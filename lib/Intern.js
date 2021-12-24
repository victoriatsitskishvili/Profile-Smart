//Require the Employee module//
const Employee = require('./Employee');

// Creating a child class of another class (intern of an employee class)//
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // The super() method refers to the parent(Employee) class. Calling the parent's constructor method and getting access to the parent's properties and methods (Employee)//
        super (name, id, email); 
        this.school = school; 
    }

    // Getting a school from input//
    getSchool () {
        return this.school;
    }

    // Employee role to intern//
    getRole () {
        return "Intern";
    }
}

// To export a module //
module.exports = Intern; 