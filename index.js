// Required Modules
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

class SVG {
  constructor() {
    this.text = '';
    this.shape = '';
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.text}
    ${this.shape}
    </svg>`;
  }
  setTextEl(text, textColor) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  setShapeEl(shape) {
    this.shapeEl = shape.render();
  }
};

// Inquirer Prompt
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
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
  
// Generate Logo -- send to logo.svg
.then((answers) => {
  const svg = new SVG();
  svg.setTextEl(answers.text, answers.textColor);
  switch (answers.shape) {
    case 'Square':
      svg.setShapeEl(new Square(), answers.shapeColor);
      break;
    case 'Circle':
      svg.setShapeEl(new Circle(), answers.shapeColor);
      break;
    case 'Triangle':
      svg.setShapeEl(new Triangle(), answers.shapeColor);
      break;
  }
fs.writeFile('logo.svg', svg.render(), (err) => {
  if (err) throw err;
  console.log('Generated logo.svg');
});
fs.writeFile('index.html', 
`<!DOCTYPE html>
  <html>
  <head><title>Logo</title></head>
  <body>
    <img src="logo.svg" />
  </body>
  </html>`, (err) => {
  if (err) throw err;
  console.log('Generated index.html');
});
});

