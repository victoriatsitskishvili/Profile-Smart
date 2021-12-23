//Require the Engineer module//
const Engineer = require('../lib/Engineer');

// Getting a github from getGithub()//
test('Getting an engineer github value', () => {
    const engineer = new Engineer('victoria', '1',' victoria@test.com', 'victoriatsitskishvili')

    expect(engineer.github).toBe('victoriatsitskishvili');
    
});

// Getting a role from getRole()// 
test('Getting a role of employee', () => {
    const engineer = new Engineer('victoria', '1',' victoria@test.com', 'victoriatsitskishvili', 'Engineer');
    
    expect(engineer.getRole()).toBe('Engineer');
});