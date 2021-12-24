//Adding all the moduels that are being used//
const fs = require('fs'); 
const inquirer = require('inquirer');
const createHTML = require('./src/createHTML');
const teamArray = []; 

// Adding profiles of an Employee //
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');

//Adding prompts//
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your team Manager name', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the name of your Manager");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your team Manager ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the ID of your Manager")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your team Manager email address",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter the email of your Manager")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter your team Manager office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log (" Please enter the office number of your Manager")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please select the role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter a name of an employee", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (" Please enter an employee's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter an ID of an employee",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log (" Please enter an ID of an employee")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter an email address of an employee",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter an email of an employee")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter a github username of an employee",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log (" Please enter a github username of an employee")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern’s school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (" Please enter the intern's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// Creating a HTML page using file system //
const writeFile = () => {
    fs.writeFile('./dist/index.html', createHTML(teamArray), err => {
        // if there is an error//
        if (err) {
            console.log(err);
            return;
        // Profile is created//
        } else {
            console.log(" Yay! 🎉 You have successfully created your team profile!")
        }
    })
}; 

addManager()
  .then(addEmployee)
//   .then(teamArray => {
//     return createHTML(teamArray);
//   })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });