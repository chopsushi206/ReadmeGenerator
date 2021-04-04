// packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

// array of questions for user input

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
    ])
};

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('Success!');
    });
}

// function to initialize app
function init() {
    questions()
        .then((data) => {
            console.log(data);
            writeToFile('README.md', generate(data))
        });
};

// initialize app
init();
