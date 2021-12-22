//Require the Manager module//
const Manager = require('../lib/Manager');

//Using constuctor as an argument in the expect method//
test('creating a manager object', () => {
    const manager = new Manager('');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Getting a role from getRole()// 
test('Getting a role of an employee', () => {
    const manager = new Manager('');

    expect(manager.getRole()).toEqual("Manager");
}); 