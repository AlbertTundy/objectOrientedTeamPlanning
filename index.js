const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manger")
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const outputDirectory = path.resolve(__dirname, "dlist")
const outputPath = path.join(outputDirectory, "team.html")
// this is where we path.join and path.resolve a html file 
const render = require("./src/template.js")
//
const teamArray = [] //this is where I'll push my inquirer answers. 

function init() {
    function makeManager() {
        inquirer.prompt([{
            type: 'input',
            name: "managersName",
            message: "What's your manager's name?"
        },
        {
           type: 'input',
           name: "managerId",
           message: "What is your manager's I.D. number?",
        },
        {
           type: 'input',
           name: "managerEmail",
           message: "What is your manager's email?",
        },
        {
           type: 'input',
           name: "managerOfficeNumber",
           message: "What is your manager's office number?",
        },
        ]) .then (function(response) {
            const newManager = new Manager(response.managersName, response.managerId, response.managerEmail, response.managerOfficeNumber)
            teamArray.push(newManager)
            teamController()
        })
        
    }
    
    function makeEngineer() {
        inquirer.prompt([{
            type: 'input',
            name: "engineerName",
            message: "What's your engineer's name?"
        },
        {
           type: 'input',
           name: "engineerId",
           message: "What is your engineer's I.D. number?",
        },
        {
           type: 'input',
           name: "engineerEmail",
           message: "What is your engineer's email?",
        },
        {
           type: 'input',
           name: "engineerGithub",
           message: "What is your engineer's github?",
        },
        ]) .then (function(response) {
            const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            teamArray.push(newEngineer)
            teamController()
        })
        
    }
    
    function makeIntern() {
        inquirer.prompt([{
            type: 'input',
            name: "internName",
            message: "What's your intern's name?"
        },
        {
           type: 'input',
           name: "internId",
           message: "What is your intern's I.D. number?",
        },
        {
           type: 'input',
           name: "internEmail",
           message: "What is your intern's email?",
        },
        {
           type: 'input',
           name: "internSchool",
           message: "What is your intern's school?",
        },
        ]) .then (function(response) {
            const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool)
            teamArray.push(newIntern)
            teamController()
        })
        
    }
    function teamController() {
        inquirer.prompt([
            {
                type: "list",
                name: "userSelection",
                message: "What kind employee would you like to add to your team?",
                choices: ['Manager', 'Engineer', 'Intern', 'none'],
            }]) .then(function(response){
                switch(response.userSelection) {
                    case "Manager":
                        makeManager();
                    break;
                    case "Engineer":
                        makeEngineer()
                    break;
                    case "Intern":
                        makeIntern()
                    break;
                    default: renderTeam()
                }
            }) 

    };
  function renderTeam() {
      fs.writeFileSync(outputPath, render(teamArray), "utf8")
  }; 
  makeManager()
}
init()