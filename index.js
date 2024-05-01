const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = ({title, description, install, usage, contribution, instruction, username, link, email, license}) => {
  return ` ## Table of contents:
  [Title](#Title)
  [Description](#Description)
  [Install](#Installation)
  [Usage](#Usage)
  [Contribution](#Contribution)
  [Instructions](#Instructions)
  [License](#License)

 ## Title: 
 ${title}
  
 ## Description: 
 ${description}

 ## Installation: 
 ${install}

 ## Usage: 
 ${usage}

 ## Contribution 
 ${contribution}

 ## Instructions: 
 ${instruction}

 ## License: 
 ${license}

 ## Questions?

  Contact Information:
  Github Username: ${username} 
  Github Profile Link: ${link}
  Email: ${email}`
  
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
        name: 'instructions',
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
        message: 'What license do you want?',
        choices: ["license1","license",],
        name: 'license',
      },
  ])


.then((response) =>

fs.writeFile("./generatedREADME.md", generateMarkdown(response), function (){console.log("file created")})
)

.catch(error => {
    console.error("Error", error);
});