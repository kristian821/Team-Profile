const fs = require('fs');

const special = (employee, role) => {
    switch (role) {
        case 'Engineer':
            return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
            break;
        case 'Intern':
            return `<li class="list-group-item">School: ${employee.getSchool()}</li>`;
            break;
    }
}

const employeeCard = (employees) => {
    if (employees.length === 0) {
        return ``;
    }
    for (i = 0; i < employees.length; i++) {
    let employee = employees[i];
    
    return `
        <div class="card" style="width: 18rem">
            <div class="card-header bg-primary text-light">
                <div class="card-title"><h4>${employee.getName()}</h4></div>
                ${employee.getRole()}
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    ${special(employee, employee.getRole())}
                </ul>
            </div>
        </div>
    `}
}

function pageTemplate(data) {
    const team = data;
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
                <title>My Team</title>
            </head>
            <body>
                <header class="col-12 bg-danger text-light text-center p-5 mb-1">
                    My Team
                </header>
            
                <main class="col-12">
                    <div class="col-12 d-flex justify-content-around flex-wrap m-3">
                        <div class="list-group list-group-horizontal ">
                            <div class="card" style="width: 18rem">
                                <div class="card-header bg-primary text-light">
                                    <div class="card-title"><h4>${team.manager.getName()}</h4></div>
                                    ${team.manager.getRole()}
                                </div>
                                <div class="card-body">
                                    <ul class="list-group">
                                        <li class="list-group-item">ID: ${team.manager.getId()}</li>
                                        <li class="list-group-item">Email: <a href="mailto:${team.manager.getEmail()}">${team.manager.getEmail()}</a></li>
                                        <li class ="list-group-item">Office Number: ${team.manager.officeNumber}</li>
                                    </ul>
                                </div>
                            </div>
                            ${employeeCard(team.engineers)}
                            ${employeeCard(team.interns)}
                        </div>
                    </div>
                </main>
            
            </body>
        </html>
    `;
} 

const generatePage = (data) => {
    new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageTemplate(data), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML page created'
            })
        })
    })
}

module.exports = generatePage;