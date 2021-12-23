const createTeamMembers = (team) => {
    const createManager = manager => {
        return `
            <div>${manager.getName()}</div>
        `
    }
    const createEngineer = engineer => {
        return `
            <div>${engineer.getName()}</div>
        `
    }
    const createIntern = intern => {
        return `
            <div>${intern.getName()}</div>
        `
    }

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
        <link rel='stylesheet' href='style.css>
        <title>Team Memebers</title>
    </head>
    <body>
        <div>${createTeamMembers(team)}</div>
    </body>
    </html>
    `
}