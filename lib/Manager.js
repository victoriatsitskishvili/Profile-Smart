//Require the Employee module//
const Employee = require('./Employee');

// Creating a child class of another class (manager of an employee class)//
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // The super() method refers to the parent(Employee) class. Calling the parent's constructor method and getting access to the parent's properties and methods (Employee)//
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    
// Employee role to Manager//
    getRole () {
        return "Manager";
    }
}

// To export a module //
module.exports = Manager; 