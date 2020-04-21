# example-nodejs
Just simple nodejs application

## Installation ##
npm install express

npm install redis

## hello-1 ##

In case of hello-1 , it need to have redis server to keep session & timestamp

export port=redis_port

export host=redis_host

node app/hello-1.js 

## hello-2 ##

node app/hello-2.js

docker run -u root --rm -d -p 8080:8080 -v $PWD/jenkinsdata:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean