// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.projectName);
  return `# ${data.projectName}
  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Description

  ${data.description}

  ## Installation Instructions

  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## Licenses

  ## Contribution Guidelines

  ${data.contributions}

  ## Tests

  ${data.test}
  
  ## Questions
  
  For answers to any other questions please contact the project developer:
  [Github](https://github.com/${data.userName})
  [E-mail](mailto:${data.email})


  [Go to Top](#${data.projectName})
`;
}

module.exports = generateMarkdown;
