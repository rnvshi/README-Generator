// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//CONVERT THESE TO SWITCHES

function renderLicenseBadge(license) {

  let licenseBadge = '';

  switch (license) {
    case 'MIT':
      licenseBadge = `![License: MIT](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      return licenseBadge;
    case 'GPL':
      licenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      return licenseBadge;
    case 'Apache':
      licenseBadge = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
      return licenseBadge;
    case 'None':
      licenseBadge = '';
      return licenseBadge;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let licenseLink = '';

  switch (license) {
    case 'MIT':
      licenseLink = `https://opensource.org/licenses/MIT`;
      return licenseLink;
    case 'GPL':
      licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
      return licenseLink;
    case 'Apache':
      licenseLink = `https://opensource.org/licenses/Apache-2.0`;
      return licenseLink;
    case 'None':
      licenseLink = '';
      return licenseLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let renderedLicense = "";
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  if (licenseBadge != "" && licenseLink != "") {
    let renderedLicense = `This repository is licensed under: \n${licenseBadge}\n \nFor more information please visit: ${licenseLink}`;
    return renderedLicense;
  } else {
    return renderedLicense;
  };

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let license = data.license[0];
  let licenseSect = renderLicenseSection(license);

  let markdown = `

  #${data.title}

  #Description
  ${data.description}

  #License
  ${licenseSect}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  #Installation
  ${data.installation}

  #Usage
  ${data.usage}

  #Credits
  ${data.credits}

  `;

  return markdown;

}

module.exports = generateMarkdown;
