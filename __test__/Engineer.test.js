//Require the Engineer module//
const Engineer = require('../lib/Engineer');

//Using constuctor as an argument in the expect method//
test('creating an Engineer object', () => {
    const engineer = new Engineer();
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Getting a github from getGithub()
test('Getting an engineer github value', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Getting a role from getRole() 
test('Getting a role of employee', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
});