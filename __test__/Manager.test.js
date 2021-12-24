//Require the Manager module//
const Manager = require('../lib/Manager');

//Using constuctor as an argument in the expect method//
test('creating a manager object', () => {
    const manager = new Manager('victoria', '1',' victoria@test.com', '123456789');
    
    expect(manager.officeNumber).toBe('123456789');
});

// Getting a role from getRole()// 
test('Getting a role of an employee', () => {
    const manager = new Manager('victoria', '1',' victoria@test.com', '123456789', 'Manager');

    expect(manager.getRole()).toBe('Manager');
}); 