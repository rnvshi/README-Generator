// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for the project:'
    }, {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of the project:',
    }, {
        type: 'input',
        name: 'installation',
        message: 'What utilities are required to install and run the program ?',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Provide a detailed description of the steps needed to execute the program:',
    }, {
        type: 'input',
        name: 'credits',
        message: 'Provide collaborators, GitHub profile links, third-party assets, and tutorials used for the development of this project:',
    }, {
        type: 'input',
        name: 'tests',
        message: 'Include tests that may be run on this code:',
    }, {
        type: 'checkbox',
        name: 'license',
        choices: ['MIT', 'GPL', 'Apache', 'None'],
        message: 'Choose a license for your repository:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log("README successfully written !"))
}

// FUNCTION TO INITIALIZE THE APP
function init() {
    inquirer.prompt(questions)
        .then((data) => {

            writeToFile('README.md', generateMarkdown(data));

        })
};

// CALL INITILIZATION FUNCTION
init();
