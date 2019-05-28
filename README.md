<h1 align="center">
  <br>
  <a href="https://chocolatemelt.github.io/dragalia-lost/"><img src="https://i.imgur.com/OXeiQNA.png" alt="Stats Calculator"></a>
  <br>
  Dragalia Lost Stats Calculator
  <br>
</h1>

## Foreword
This is a fork off of the original [Dragalia Lost Stats Calculator](https://junlico.github.io/dragalia-lost/), currently actively developed and maintained by kev (yours truly) and big friend chu2. The primary difference is the addition of various damage calculations absent from the original calculator.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Publish](#publish)
- [Built With](#built-with)
- [Support](#support)
- [License](#license)

## Demo

- [English](https://chocolatemelt.github.io/dragalia-lost/stats/en)
- [日本語](https://chocolatemelt.github.io/dragalia-lost/stats/ja)
- [简体中文](https://chocolatemelt.github.io/dragalia-lost/stats/zh)

## Installation
This instruction will get you a copy of the project and running on your local machine for development and testing purposes. To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with npm) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/chocolatemelt/dragalia-lost.git

# Go into the repository
$ cd dragalia-lost

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Publish
Primarily for developers: if you wish to publish to GitHub Pages, follow the following instructions. Requires push permissions (as it pushes to origin/gh-pages).

```bash
# Build static files
$ npm run-script build

# Publish
$ ./publish.js
```

## Built With

- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reduxjs/redux)
- [Material-UI](https://github.com/mui-org/material-ui)

## Support
Donate to Junlico! He was the original creator after all, and this is simply a branch with extra features using his very permissive MIT License.

<a href="https://www.patreon.com/junlico">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
