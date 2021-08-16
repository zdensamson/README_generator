// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your github name!');
            return false;
          }
        }
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email adress? (Required)',
    validate: email => {
        if (email) {
        return true;
        } else {
        console.log('Please enter your email adress!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'projName',
    message: 'What is the name of your project? (Required)',
    validate: title => {
        if (title) {
        return true;
        } else {
        console.log('Please enter the title of your project!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'projDesc',
    message: 'Please write a short description of your project. (Required)',
    validate: desc => {
        if (desc) {
        return true;
        } else {
        console.log('Please describe your project!');
        return false;
        }
    }
    },
    {
    type: 'checkbox',
    name: 'license',
    message: 'What kind of license do you want for this project? (Check one)',
    choices: ['MIT', 'APACHE'],
    validate: licen => {
        if (licen.length > 0) {
        return true;
        } else {
        console.log('Please select a license!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'dependency',
    message: 'What command should be run to install dependencies? (Required)',
    validate: depInput => {
        if (depInput) {
        return true;
        } else {
        console.log('Please provide the command to install dependencies!');
        return false;
        }
    }
    },
    {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
    },
    {
        type: 'input',
        name: 'repoInstruction',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributeInstruction',
        message: 'What does the user need to know about contributing?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    if(data.license[0] == "MIT") {
        data.license.push("![APM](https://img.shields.io/apm/l/vim-mode)");
    }
    if(data.license[0] == "APACHE") {
        data.license.push("![AUR license](https://img.shields.io/aur/license/android-studio)");
    }

    const generateTxt = data => {
        return `
# ${data.projName}
${data.license[1]}

## Description

${data.projDesc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install dependencies, run the following command:
\`\`\`
${data.dependency}
\`\`\`

## Usage

${data.repoInstruction}

## License

This project is licensed under the ${data.license[0]} license.

## Contributing

${data.contributeInstruction}

## Tests

To run tests run the following command:
\`\`\`
${data.test}
\`\`\`

## Questions

Please feel free to reach out to me with any questions at ${data.email}. Or you can check out my GitHub account: [${data.username}](https://github.com/${data.username})

        `
    }
      
    const txt = generateTxt(data);


     fs.writeFile(fileName, txt, err => {
        if (err) throw new Error(err);
     })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
// init().then(answers => console.log(answers));
init().then(answers => writeToFile("readMe.md", answers));

