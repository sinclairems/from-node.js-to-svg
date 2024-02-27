// Required Modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateShapes = require('./lib/shapes');
const shapeTest = require('./lib/shapes.test');

// Class Notes
// Constructors (object creation)
// Prototypes (are how we accomplish inheritance)
// Classes are going to handle the prototype for us, but now we know they exist

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

// Importing inquirer 8.2.4
//const inquirer = require('inquirer')
// Importing fs
//const fs = require('fs')
// Importing local module 
//const generateMarkdown = require('./utils/generateMarkdown')