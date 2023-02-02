// FUNCTION: RETURNS LICENSE BADGE GIVEN USER INPUT

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

// FUNCTION: RETURNS LICENSE LINK GIVEN USER INPUT

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

// FUNCTION: RENDERS LICENSE SECTION INCLUDING BADGE AND FURTHER INFO LINK

function renderLicenseSection(license) {

  let renderedLicense = "";
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  if (licenseBadge != "" && licenseLink != "") {
    let renderedLicense = `This repository is licensed under:\n ${licenseBadge}\n \nFor more information please visit: ${licenseLink}`;
    return renderedLicense;
  } else {
    return renderedLicense;
  };

}

// FUNCTION: GENERATE DATA TO BE INPUT IN README

function generateMarkdown(data) {

  let license = data.license[0];
  let licenseSect = renderLicenseSection(license);

  let markdown = `
  ## ${data.title}

  ## Description
  \n${data.description}

  ## License
  \n${licenseSect}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  \n${data.installation}

  ## Usage
  \n${data.usage}

  ## Credits
  \n${data.credits}

  ## Questions
  \n Questions may be directed to https://github.com/${data.username}
  \n For further information please email ${data.email}

  `;

  return markdown;

}

module.exports = generateMarkdown;
