// Required Modules
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

class SVG{
  constructor() {
    this.text = '';
    this.shape = '';
  }
  render() {
    return '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">' + this.text + this.shape + '</svg>';
  }
  setTextEl(text, color) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeEl(shape, color) {
    this.shapeEl = shape;
    this.shapeEl.setColor(color);
  }
}

// Inquirer Prompt
inquirer
  .prompt([
    {
      type: 'input',
      name: 'char1',
      message: 'Enter up to 3 characters:',
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
// want to send html file to ./examples
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

module.exports = shapes;


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

