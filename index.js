const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')
const fs = require('fs')

const questions = [
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your github email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please provide a brief description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please Provide Installation instructions',
            name: 'instructions',
        },
        {
            type: 'input',
            message: 'Please Provide Examples of for your project here.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Provide Any Conribution Guidelines',
            name: 'contribution',
        },
        {
            type: 'list',
            message: 'Choose a project license',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
            name: 'license'
        },
    ]
        function printReadMe() {
            inquirer.prompt(questions).then((answers) => {
                fs.writeFile('README.md', generateMarkdown(answers), error => {
                    error 
                    ? console.log(error) 
                    : console.log('Read me created!')
                }) 
              });
        }

        printReadMe()

    