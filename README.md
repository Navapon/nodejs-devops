# Objective

    i've do the following task
    - Create simple CI/CD for application with code pipeline
    - docker-compose provisioning infrastucture with seperate environment by using env & nodejs dotenv

# Pre-require

    - Docker & Docker-compose

# How to the jenkins CI'CD

First you need to run jenkins at your own machine which is all jenkins data including job located at "jenkinsdata" folder

Run command 

    docker run -u root --rm -d -p 8000:8080 -v $PWD/jenkinsdata:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean

After ready using 

        username: admin
        password: admin

There is 2 job on jenkins

1. APP CI JOB
        
    which is provide for building the container and located at your machine as repository

2. APP CD JOB

    which is trying to deploy your builded container by can specific env and docker tag you wanna run on your local


# Docker Compose

There is 2 file of the container

1. dev.docker-compose for run dev env by command
        
        docker-compose -f ./dev.docker-compose.yml up --scale hello1=2 --scale hello2=2

2. prod.docker-compose for run production env by command

        docker-compose -f ./prod.docker-compose.yml up --scale hello1=2 --scale hello2=2
 

The API can access via Nginx make upstream forward to two container on each api

     http://localhost:8080/hello1
     http://localhost:8080/hello2

The nginx log and config  located at nginx folder