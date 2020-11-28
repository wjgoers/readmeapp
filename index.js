const inquirer = inquirer('inquirer')

inquirer
    .prompt([
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
            message: 'Provide Conribution Guidelines',
            name: 'contribution',
        },
        {
            type: 'list',
            message: 'Choose a project license',
            choices: ['?'],
            name: 'license'
        },
    ])

