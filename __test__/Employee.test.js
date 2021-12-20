//Require the Employee module//
const Employee = require('../lib/Employee.js');
//Using constuctor as an argument in the expect method//
test('creates an employee object', () => {
    const employee = new Employee();
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// Get a name from getName // 
test('get an employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String));
});

// Get an id from getId //
test('get an employee ID', () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Get an email from getEmail //
test('get an employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Get a role from getRole //
test('Get a role of an employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");
}); 