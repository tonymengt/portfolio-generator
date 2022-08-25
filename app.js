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
            message: "what is your name?"
        },
        {
            type: "input",
            name: "github",
            message: "enter your GitHub username"
        },
        {
            type: "input",
            name: "about",
            message: "provide some information about yourself:"
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
            message: 'what is the name of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the project (required)'
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
            message: 'enter the GitHub link to your project. (required)'
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
