// function to generate markdown for README
function generateMarkdown(answers) {
    return `
            # ${answers.title} 

            # ${answers.username}

            ## ${answers.email} 

            Table of Contents 

            ## Description
            ${answers.description}

            ## User Instructions
            ${answers.instructions}

            ## Usage Examples
            ${answers.usage}

            ## Contributions
            ${answers.contribution}

            ## License 
            ${answers.license}

            `}

module.exports = generateMarkdown;