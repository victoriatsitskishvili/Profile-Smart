//Require the Employee module//
const Employee = require('../lib/Employee.js');
//Using constuctor as an argument in the expect method//
test('creates an employee object', () => {
    const employee = new Employee();
    
    expect(typeof(employee)).toBe("object")
});
// Get a name from getName // 
test('get an employee name', () => {
    const employee = new Employee('victoria');

    expect(employee.name).toBe('victoria');
});

// Get an id from getId //
test('get an employee ID', () => {
    const employee = new Employee('victoria', '1');

    expect(employee.id).toBe('1');
});

// Get an email from getEmail //
test('get an employee email', () => {
    const employee = new Employee('victoria', '1', 'victoria@test.com');

    expect(employee.email).toBe('victoria@test.com');
});

// Get a role from getRole //
test('get a role of an employee', () => {
    const employee = new Employee('victoria', '1', 'victoria@test.com', 'Employee');

    expect(employee.getRole()).toBe('Employee');
}); 