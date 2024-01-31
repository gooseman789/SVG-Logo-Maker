const inquirer = require('inquirer')
const fs = require('fs')

const questions =  [
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: "Thank you for choosing this application! Ready to begin?",
                name: 'start'
            },
            {
                type: 'confirm',
                message: "Please choose whichever options you would like best or type your answers.",
                name: 'statement'
            },
            {
                type: 'input',
                message: 'What three letters would you like displayed in this logo?',
                name: 'text'
            },
            {
                type: 'list',
                message: 'What shape would you like to choose?',
                name: 'shape',
                choices: ['Square', 'Circle', 'Triangle'],
                default: 'None'
            },
            {
                type: 'input',
                message: 'What color would you like the shape to be filed? Please enter standard color names or a hexadecimal number.',
                name: 'color',
            },
            {
                type: 'confirm',
                message: 'Are you happy with your choices?',
                name: 'confirm'
            }
        ])
        .then((data) => 
        init(data))
    ]