// Required Modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateShapes = require('./lib/shapes');
const shapeTest = require('./lib/shapes.test');

// Inquirer Prompt
inquirer
  .prompt([
    {
      type: 'input',
      name: 'char1',
      message: 'Enter the first character:',
    },
    {
      type: 'input',
      name: 'char2',
      message: 'Enter the second character:',
    },
    {
      type: 'input',
      name: 'char3',
      message: 'Enter the third character:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Square', 'Circle', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ])
  
// Generate Logo
function generateLogo(data) {
  const svg = generateShapes(data);
  fs.writeFile('logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

// Generate HTML
function generateHTML() {
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Logo</title>
  </head>
  <body>
    <img src="logo.svg" alt="Logo" width="300" height="200">
  </body>
  </html>
  `;
  fs.writeFile('index.html', html, (err) => {
    if (err) throw err;
    console.log('Generated index.html');
  });
  };

// Function to initialize
function init () {
  inquirer.prompt(questions).then((data) => {
    generateLogo(data);
    generateHTML();
  }
  )}
  
// Testing
console.log(shapeTest());



// Notes
// Need to use inquirer to prompt the user for inquirer 8.2.4
  // Questions: 
    // Enter 3 Characters (text)
    // Enter text color (keyword or hex code accepted) -- need a program/module to read this
    // Choose shape (list of shapes) 
    // Enter shape color (keyword or hex code accepted) -- need a program/module to read this
    // then logo.svg file will be created
    // console.log('Generated logo.svg')
    // create index.html file with the logo.svg file
    // image is 300px x 200px
// Need to use fs to write the file: logo.svg

