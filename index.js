const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = ({title, description, install, usage, contribution, instruction, username, link, email, license}) => {
  return ` ## Table of contents:
 1.[Title](#Title)

 2.[Description](#Description)

 3.[Install](#Installation)

 4.[Usage](#Usage)

 5.[Contribution](#Contribution)

 6.[Tests](#Tests)

 7.[Instructions](#Instructions)

 8.[License](#License)

 9.[Questions](#Questions?)
 
 ## Title
 ${title}
  
 ## Description
 ${description}

 ## Installation
 ${install}

 ## Usage
 ${usage}

 ## Contribution
 ${contribution}

 ## Test Instructions 
 ${instruction}

 ## License
 ${generateBadge(license)}

 ## Questions?

  Github Username: ${username} 
  Github Profile Link: ${link}
  Email: ${email}
  
  `

}

const generateBadge = function(license){
if (license === "Apache 2.0"){
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"}
  else if (license === "Boost Software License 1.0"){
   return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
}

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your readme?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'instruction',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your github profile link?',
        name: 'link',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
        type: 'list',
        message: 'Which license do you want?',
        choices: ["Apache 2.0","Boost Software License 1.0",],
        name: 'license',
      },
  ])


.then((response) =>

fs.writeFile("./generatedREADME.md", generateMarkdown(response), function (){console.log("file created")})
)

.catch(error => {
    console.error("Error", error);
});