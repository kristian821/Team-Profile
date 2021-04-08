const inquirer = require('inquirer');
const generatePage = require('./generate-page.js');
const htmltemplate = require('./htmltemplate.js');
const Manager = require('../lib/manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Create Global Arrays to store any new Engineers and Interns
const engineers = [];
const interns = [];

class Team {
    constructor(manager, engineers, interns){
        // A Team will only have one manager
        this.manager = manager;
        this.engineers = engineers;
        this.interns = interns;
    };

    init() {
        // Initialize questions
        this.addManager()
        
    };

    finishTeam() {
        // pass through manager when question is started and engineers and interns from global arrays
        let team = new Team(this.manager, engineers, interns);
        htmltemplate(team);
       
    };

    addManager() {
        inquirer
            .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the Team Manager's Name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the Team Manager's Employee ID"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the Team Manager's Email"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the Team Manager's Office Number"
            }])
            .then(manager => {
                this.manager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
                // pass through manager name 
                this.next();
        });
    };

    next() {
        inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Team']
        }).then(({action}) => {
            if (action === 'Add an Engineer') {
                this.addEngineer();
            } else if (action === 'Add an Intern') {
                this.addIntern();
            } else if (action === 'Finish Team') {
                this.finishTeam();
            }
        })
    };

    addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the Engineer's name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the Engineer's Employee ID"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the Engineer's email address",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the Engineer's GitHub Username"
            }
        ]).then(engineer => {
            // Add new engineer to global array of engineers
            engineers.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github));
            // ask if adding more employees and pass through manager name
            this.next();
        });
        
    };

    addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please enter the Intern's name"
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the Intern's Employee ID"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the Intern's Email"
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the Intern's School"
            }
        ]).then(intern => {
            // add new intern to global array of interns
            interns.push(new Intern(intern.name, intern.id, intern.email, intern.school));
            // ask if anything else is needed, and pass through manager name
            this.next();
        });
        
    }

}

module.exports = Team;