# WebApp UI test automation

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
  - [System requirements](#system_requirements)
  - [General prerequisites](#general_prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
  - [Development flow](#development_flow)
  - [CLI_flags](#cli_flags)

## About <a id="about"></a>
This repository contains the code of end-to-end tests, written in  Cypress framework (https://docs.cypress.io/guides/getting-started/writing-your-first-test). Main pattern used for this project - is Page Object. We describe elements of pages and the way they can behave (*pages* folder). We describe actions, which we use to interact with pages (*actions* folder). And describe test specs (*e2e* folder) - things/flows we want to test and verify on our pages, using actions to put the app in a required state.

There are several main folders of these project:
* cypress - base folder, that contains the following:
  * actions - contains classes with methods which describe the interaction with pages. Contains subfolders, named by application's tabs.
  * fixtures - contains test data, named by test spec names. Data is stored in js files for convenient exporting and autocompletion.
  * e2e - contains test specs
  * pages - contains classes, which describe what elements different pages have and how pages can behave. Contains subfolders, named by application's tabs. Also contains manager files for each folder, that accumulates files of folder to one manager file to prevent big amount of imports in specs.
  * support - contains three files:
    * **commands.js** - contains custom cypress commands.
    * **e2e.js** - used for enabling additional modules for cypress
  * enum - static data in test application
  * types - custom global types for test framework
  * utils - folder for helper functions. Contains useful functions validating format of data, working with uploading fixtures, acquiring baseUrl for current environment of test run.

## Getting started <a id="getting_started"></a>

### System requirements <a id="system_requirements"></a>
- (Windows users) [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install) (Windows Subsystem for Linux). We use *Ubuntu 20.04* and you need to [use version 2 of WSL](https://docs.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2).
- Docker. Get it for your system from [here](https://docs.docker.com/get-docker/).If you use Windows - please, [use WSL 2 based engine](https://docs.docker.com/desktop/windows/wsl/) for Docker.

### General prerequisites <a id="general_prerequisites"></a>
1. Install `nvm`([macOS/Linux](https://github.com/nvm-sh/nvm), [Windows](https://github.com/coreybutler/nvm-windows)).
2. **WARN: please, use lts version of node 16*** Install lts node version. Run `nvm install lts`.
3. Run `nvm use lts` to use it.

### Setup <a id="setup"></a>
1. Clone repo
2. Install packages. Run `npm i`
3. Add `cypress.env.json` file to the root of project with following format:
```json
{
  "USERNAME": "value",
  "PASSWORD": "value"
}
```

## Usage <a id="usage"></a>

General way to run all cypress tests to run `npx cypress run` command. This command will run all existing test spec headless in electron browser at staging environment, using Api login method by default. General way to open cypress GUI is to run `npx cypress open` command.

`package.json` file in `"scripts":` property contains ready to use commands for some mostly used cases. For example `npm run cy:open` command will open cypress GUI, `npm run cy:api_chrome_prod` will run all api tests in chrome browser at production environment.

### Development flow <a id="development_flow"></a>

  **NOTE**:
  - **please, while developing anything** - run `npm run tsc:watch` command in separate terminal instance (or split terminal into two). This will make TypeScript compilier keep an eye on your files changes and alert you when you forget, for example, update methods names after merge.
  - please, before push on remote branch run `npm run format` and fix errors if exist


### CLI flags <a id="cli_flags"></a>

About cypress command line and it's general flags can be read [here](https://docs.cypress.io/guides/guides/command-line).

Project's specific environment variables for `--env` flag:
1. `url=` - accepts values `dev`,`prod` or `stage` for development, production or staging environment. Example of usage: `npx cypress run --env url=prod` will run tests at production environment.
2. `customEnv=` - accepts url to specific branch environment. Example of usage: `npx cypress run --env customEnv=https://someUrl/to/env` will launch tests at this environment.
