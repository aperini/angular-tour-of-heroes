# Tutorial
https://angular.io/docs/ts/latest/tutorial/


# To run locally (without docker nor vagrant)

## Prerequisites

node v4.x.x or higher and npm 3.x.x or higher (node -v and npm -v)

## First Run
* npm install
* npm start

## Next Runs
* npm start

# To run inside a docker container using vagrant

## Prerequisites

* virtualbox 5.x
* vagrant 1.9.0
* vagrant-docker-compose plugin (run "vagrant plugin install vagrant-docker-compose")

## Run
* vagrant up
* Check http://localhost:8080 (for cAdvisor) and http://localhost:3000 (for heroes)