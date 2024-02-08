const inquirer = require('inquirer')
const fs = require('fs')
const shapes = require('./lib/shapes')
let answers = {}
// function generate() {
//     let template;
//     switch (data.shape) {
//         case 'Triangle':
//             template = new shapes.Triangle(data.text, data.textColor, data.shapeColor, data.shape)
//             break;
//         case 'Square':
//             template = new shapes.Square(data.text, data.textColor, data.shapeColor, data.shape)
//             break
//         case 'Circle':
//             template = new shapes.Square(data.text, data.textColor, data.shapeColor, data.shape)
//     }
//     fs.writeFile('logo.svg', template.svg, (err) => 
//         err ? console.error(err) : console.log('Generated logo.svg'))
// }



function init() {
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
                name: 'shapeColor',
            },
            {
                type: 'input',
                message: 'What color would you like the letters to be? Please enter standard color names or a hexadecimal number.',
                name: 'textColor'
            },
            {
                type: 'confirm',
                message: 'Are you happy with your choices?',
                name: 'confirm'
            }
        ])
        .then((data) => {
            if (!data.confirm) {
                console.log("Let us go through the questions again then")
                init()
            } else {
                answers = Object.assign({}, answers, data)
                generate(answers)
            }
        })
    }


    function generate() {
        let template;
        switch (answers.shape) {
            case 'Triangle':
                template = new shapes.Triangle(answers.text, answers.textColor, answers.shapeColor, answers.shape)
                break;
            case 'Square':
                template = new shapes.Square(answers.text, answers.textColor, answers.shapeColor, answers.shape)
                break
            case 'Circle':
                template = new shapes.Square(answers.text, answers.textColor, answers.shapeColor, answers.shape)
        }
        fs.writeFile('logo.svg', template.svg, (err) => 
            err ? console.error(err) : console.log('Generated logo.svg'))
    }


    init()