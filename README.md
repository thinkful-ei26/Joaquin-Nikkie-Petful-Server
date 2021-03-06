# Petful, Nikkie and Joaquin

Backend for a pet adoption app. In this iteration, a client can query the server to receive information on a cat, or a dog, currently up for adoption, or remove either a dog or a cat from the list of available animals. In the case of a get to api/cat or api/dog,  the response will be information on the single cat or dog available for adoption. We use a FIFO structure to render the first pet in our queue, which means a user will only be shown the animal that has been waiting the longest, in the queue. A user is not able to select a cat or a dog from a list.

Run the server in your local environment and go to url http://localhost:8080/api/cat, or test from Postman.

The production client can be seen at https://obscure-ocean-99131.herokuapp.com/
The repository is at https://github.com/thinkful-ei26/Nikkie-Joaquin-Petful-Client.git
The production server is at https://petful-nikkie-joaquin-server.herokuapp.com/
The repository is at https://github.com/thinkful-ei26/Joaquin-Nikkie-Petful-Server.git
## Getting started

### Setting up a project

* Move into your projects directory: `cd ~/YOUR_PROJECTS_DIRECTORY`
* Clone this repository: `git clone https://git.heroku.com/petful-nikkie-joaquin-server.git YOUR_PROJECT_NAME`
* Move into the project directory: `cd YOUR_PROJECT_NAME`
* Install the dependencies: `npm install`
* Create a new repo on GitHub: https://github.com/new
    * Make sure the "Initialize this repository with a README" option is left unchecked
* Update the remote to point to your GitHub repository: `git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`

### Working on the project

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Run the development task: `npm start`
    * Starts a server running at http://localhost:8080
    * Automatically restarts when any of your files change

## Databases

This iteration does not use a database. Data is hard coded as a queue in index.js.

## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

### Setting up the project on Heroku

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`

* If your backend connects to a database, you need to configure the database URL:
    * For a MongoDB database: `heroku config:set DATABASE_URL=mongodb://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME`
    * For a PostgreSQL database: `heroku config:set DATABASE_URL=postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME`

* If you are creating a full-stack app, you need to configure the client origin: `heroku config:set CLIENT_ORIGIN=https://www.YOUR_DEPLOYED_CLIENT.com`

### Deploying to Heroku

* Push your code to Heroku: `git push heroku master`
