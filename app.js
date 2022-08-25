const inquirer = require('inquirer')
// const fs = require("fs");
// const generatePage = require("./src/page-template");
// const pageHTML = generate(name, github);
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log("Portfolio complete! Check out index.html to see the output!")
// });
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name? (required)",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('please enter your name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "enter your GitHub username. (required)",
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else {
                    console.log('please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'would you like to enter some information about yourself for an "about" section?',
            default: true
        },
        {
            type: "input",
            name: "about",
            message: "provide some information about yourself:",
            when: ({confirmAbout}) => {
                if (confirmAbout){
                    return ture;
                } else {
                    return false;
                }
            }
        }
    ]);
};



const promptProject = portfolioData => {
    if (!portfolioData.projects){
        portfolioData.projects=[];
    }

    console.log(`
    =================
    Add a New Project
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your project? (required)',
            validate: projectInput => {
                if(projectInput){
                    return true;
                } else {
                    console.log('please enter the your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the project (required)',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log('please provide a description of the project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'language',
            message: 'what did you build this project with? (check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'enter the GitHub link to your project. (required)',
            validate: linkInput => {
                if(linkInput){
                    return true;
                } else {
                    console.log('please provide your github link!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to enter another project?',
            deafult: false
        }
        
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData)
        } else {
            return (portfolioData)
        }
    });
};

promptUser()
    .then(promptProject)
    .then(portfolioData=> {
        console.log(portfolioData)
    });
