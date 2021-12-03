
<h1 align="center">
  <br>
  <a href="https://samiromarov.github.io/tdd_frontend/"><img src="https://reactjs.org/logo-og.png" alt="React" width="500"></a>
  <br>
  TDD React Todo App
  <br>
</h1>

<h4 align="center">A minimal Todo App built on top of <a href="https://reactjs.org/" target="_blank">React</a>.</h4>


![CI/CD](https://github.com/samiromarov/tdd_frontend/workflows/CI/CD/badge.svg)


<p align="center">
  <a href="#architectural-decisions">Architectural Decisions</a> •
  <a href="#how-to-use">How To Use</a> •
</p>

![screenshot](https://s10.gifyu.com/images/ezgif.com-gif-makera563459ec324bb77.gif)

## Architectural Decisions

* Simple React Application created with create-react-app
  - Create React App is **a comfortable environment for learning React**, and is the best way to start building a new single-page application in React.
* Test Driven Development
  - With Jest &  Testing Library
  - To test React Components following libraries were used:

	1.  **@testing-library/jest-dom**. We are going to use this to make assertions about the state of the DOM using custom jest matchers for the DOM.
	2.  **@testing-library/react**. It provides APIs for us to work with React components in our tests.
	3.  **@testing-library/user-event**. It provides us with API to simulate real events(such as click) in the browser as the user interacts with the DOM. The @testing-library/react library already provides a `userEvent` function to simulate events, but @testing-library/user-event provides a more advanced simulation.
* TailwindCSS used for simple styling
* Deployment configuration were written for Docker 
  - Becasue I used github pages for deploying instead of AWS/DigitalOcean Docker images were not needed.
  
* Deployed on Github Pages w/o need of Docker images
* GitHub Actions were used to automate, customize, and execute software development workflows right in  GitHub repository for CI/CD. 
  - Workflow can be seen in /[.github](https://github.com/SamirOmarov/tdd_frontend/tree/main/.github)/**workflows**/ci.yml




## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/SamirOmarov/tdd_frontend

# Go into the repository
$ cd tdd_frontend

# Install dependencies
$ yarn install

# Run the tests
$ yarn test

# Run the app
$ yarn start
```

To run the docker version: From your command line:

```bash
# Build and tag docker image
$ docker build -t my-app:dev .

# Run the container once the build is done
$ docker run -it -p 3000:3000 my-app:dev

# Build and run our production image
$ docker build -f Dockerfile-prod -t my-app:prod .
$ docker run -itd -p 80:80 --rm my-app:prod
```
