// console.log("hello node!");
// console.log(document);



// var message = "Hello Node!";
// var sum = 5+3;
// console.log(message);
// console.log(sum);

// var commandLineArg = process.argv.slice(2,process.argv.length);
// console.log(commandLineArg)

// Using function expression syntax
// const addNums = function(numOne, numTwo) {
//     return numOne + numTwo;
// };

// // Using new arrow function syntax
// const addNums = (numOne, numTwo) => {
//     return numOne + numTwo;
// };

// const profileDataArgs = process.argv.slice(2, process.argv.length);

// // notice the lack ofparentheses around the 'profileDataArr' parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++){
//         console.log(profileDataArr[i]);
//     }
// };
// printProfileData(profileDataArgs)

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });
//   };

const fs = require("fs");
const generatePage = require("./src/page-template");
const profileDataArgs = process.argv.slice(2);
// const name1 = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;
// // Template Literals
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Jane', 'janehub'));

// Multi-line strings


fs.writeFile('./index.html', generatePage(name,github), err => {
    if (err) throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!")
});
