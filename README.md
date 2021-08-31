# Protractor with Cucumber BDD Framework

## Table of Contents

* [Introduction](#Introduction)
* [Prerequisites](#Prerequisites)
* [Installation](#Installation)
* [Usage](#Usage)

## Introduction

This is protractor BDD Framework targeted to handle both Angular and Non-Angular Web Applications & APIs.

## Prerequisites

This section details any and all prerequisites in order for the application to be run.

a. Bestbuy APIs (server) are up and running on your local server -> npm start.

b. Using Terminal -> Go to the e2e folder (since this is the test folder) from the main folder -> command = cd e2e.

### Tools
Below tools/dependencies are required to be installed in the machine from where automation scripts would be triggered-

1. VS Code 
2. Node.js
3. Cucumber
4. protractor


## Installation

The installation section details steps that need to be taken in order to properly install the application.

1. Installation step 1

> npm install package.json

This global installation is required in order for the application to function properly.

2. Installation step 2

> node node_modules/protractor/bin/webdriver-manager update

This command downloads/updates the browser drivers.


## Usage

•	Clone this repo

•	Open the framework in VS Code

•	Delete any “node_modules” folder that may be present

•	Open terminal and cd to the e2e folder (Test folder)

•	Run 'npm install' to install relevant dependencies from package.json. This will create a 'node_modules' folder within the framework structure 

• Run 'node node_modules/protractor/bin/webdriver-manager update' to update browser drivers

### Commands

#### Run Scripts on Local Browser (By default headless chrome)

1. npm run e2e 
This command would start execution on the platform details provided during execution 

HTML Reports get generated using default OS browser
