const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manger")
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
// this is where we path.join and path.resolve a html file 
const render = require("./src/FUNCTIONSTHATCREATETHEHTML")
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
           name: "id",
           message: "What is your manager's I.D. number?",
        },
        ]) .then (function(response) {
            const newManager = new Manager(response.managersName)
            teamArray.push(newManager)
        })
        
    }
    //Everything will be in here
}
init()