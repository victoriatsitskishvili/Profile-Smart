//Creating a team//
const createTeamMembers = (team) => {
    //Creating a Manager//
    const createManager = manager => {
        return `
        <div class="profile employee-form">
        <div class="profile-header">
                <h3>${manager.getName()}</h3>
                <h4 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h4>
                </div>
                <div class="profile-body">
            <ul class="items">
            <li class="list-item">ID: ${manager.getId()}</li>
            <li class="list-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `;
};
        //Creating an Engineer//
    const createEngineer = engineer => {

        return `
        <div class="profile employee-form">
        <div class="profile-header">
                <h3>${engineer.getName()}</h3>
                <h4 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h4>
            </div>
            <div class="profile-body">
            <ul class="items">
            <li class="list-item">ID: ${engineer.getId()}</li>
            <li class="list-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `
};

//Creating an Intern//
       
    const createIntern = intern => {
        return `
        <div class="profile employee-form">
        <div class="profile-header">
                <h3>${intern.getName()}</h3>
                <h4 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h4>
            </div>
            <div class="profile-body">
            <ul class="items">
            <li class="list-item">ID: ${intern.getId()}</li>
            <li class="list-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-item">School: ${intern.getSchool()}</li>
            </ul>
    </div>
</div>
    `
};
    

    const memebers = []

    memebers.push(team.filter(person => person.getRole() === 'Manager').map(manager => createManager(manager)))
    memebers.push(team.filter(person => person.getRole() === 'Engineer').map(engineer => createEngineer(engineer)))
    memebers.push(team.filter(person => person.getRole() === 'Intern').map(intern => createIntern(intern)))

    return memebers.join('')
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Memebers</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
<div class="container-fluid">
<div class="row">
    <div class="col-12 jumbotron mb-3 team-profiles">
          <h1 class="text-center">Team Members</h1>
              </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
          <div class="team-info col-12 d-flex justify-content-center">
        <div>${createTeamMembers(team)}
        </div>
        </div>
    </div>
</body>
</html>
    `;
};
