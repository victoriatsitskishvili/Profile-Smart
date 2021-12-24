// Using a class keyword to write a constructor function //
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Return a name from input //
    getName () {
        return this.name;
    }

    // Return an ID from input //
    getId () {
        return this.id;
    }   

    // Return an email from input //
    getEmail () {
        return this.email;
    }

    // Retuen an employee type from input //
    getRole () {
        return 'Employee'; 
    }
};

// To export a module //
module.exports = Employee; 