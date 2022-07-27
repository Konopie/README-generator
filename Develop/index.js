// TODO: Include packages needed for this application pot
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title (Required)',
            validate: projectInput => {
                if (projectInput) {
                  return true;
                } else {
                  console.log('Please enter your project title!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation of your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage of your project',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the contribution guidelines of your project',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions of your project',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
    ]).then(({
        title,
        description,
        installation,
        usage,
        license,
        contribution,
        test,
        github,
        email
    }) =>{
        const template =  `# ${title} 

        * [Description](#description)
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contribution](#contribution)
        * [Questions](#github)

        ##Description 
        ${description}
        ##Installation
        ${installation}
        ##Usage
        ${usage}
        ##License
        ${license}
        ##Contribution
        ${contribution}
        ##Tests
        ${test}
        ##Questions
        GitHub: ${github}
        email: ${email}
        `;
        writeToFile(title, template);
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data)
    // must be called README.md for github to load it on page
    fs.writeFile(`../README.md`, data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('READ ME has been generated')
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}

// Function call to initialize app
init();
