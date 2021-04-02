const inquirer = require('inquirer');
const fs = require('fs');

const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please include any necessary installation instructions for the project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please include any usage information for the project.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please include any contribution instructions for the project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please include any test instructions for the project.',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
    }
])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => console.log(data))
 }

// Function call to initialize app
init();
