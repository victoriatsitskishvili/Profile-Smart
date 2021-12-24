//Require the Intern module//
const Intern = require('../lib/Intern');


// Getting a school from getSchool()//
test('gets employee school', () => {
    const intern = new Intern('victoria', '1',' victoria@test.com', 'Seneca');
    
    expect(intern.getSchool()).toBe('Seneca');
});

// Getting a role from getRole()// 
test('Getting a role of an employee', () => {
    const intern = new Intern('victoria', '1',' victoria@test.com', 'Seneca', 'Intern');

    expect(intern.getRole()).toBe('Intern');
});