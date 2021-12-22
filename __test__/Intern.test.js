//Require the Intern module//
const Intern = require('../lib/Intern');

//Using constuctor as an argument in the expect method//
test('creating an Intern object', () => {
    const intern = new Intern('');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Getting a school from getSchool()//
test('gets employee school', () => {
    const intern = new Intern('');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Getting a role from getRole()// 
test('Getting a role of an employee', () => {
    const intern = new Intern('');

    expect(intern.getRole()).toEqual("Intern");
}); 