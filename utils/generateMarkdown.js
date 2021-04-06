// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license !== null) {
    return `[![License](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license})`
  } else {
    return ''
  }
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  console.log(data.license);
  if (data.license !== null) {
    return `[${data.license}](https://opensource.org/licenses/${data.license})`
  } else {
    return ''
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.projectName);
  return `# ${data.projectName}
  ${renderLicenseBadge(data)}
  ## Table of Content

  * [Description](#description)
  * [Installation](#installation-instructions)
  * [Usage](#usage)
  * [License](#licenses)
  * [Contributing](#contribution-guidelines)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Description

  ${data.description}

  ## Installation Instructions

  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## Licenses

  This project is using the ${renderLicenseLink(data)} license.

  ## Contribution Guidelines

  ${data.contributions}

  ## Tests

  ${data.test}
  
  ## Questions
  
  For answers to any other questions please contact the project developer:
  * [Github](https://github.com/${data.userName})
  * [E-mail](mailto:${data.email})


  [Back to Top](#TOP)
`;
}

module.exports = generateMarkdown;
