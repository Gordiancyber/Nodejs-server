How to build a simple Nodejs server into a Docker container 

The aim of this is to show you how to get a Simple Node.js server app into a Docker container.

Development
To get a local copy of the code, clone it using git:

git clone https://github.com/gordiancyber/nodejs-server.git

Step 1 - Creating a Node.js Application
First, we will start by creating a directory for our project and then install some dependencies for our simple “Hello world” app.

$mkdir nodejs-server
$cd nodejs-server


Install npm and Express, which is a Node.js framework. 
Then, initialize npm in our directory. Copy or use the code below in your command line or terminal. 

$npm innit

//npm creates a package.json that holds the dependencies of the app. Next, install the Express framework dependency.
Npm install express --save

Your codebase result should look like this:

{
  "name": "node-app",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "license": "MIT",
  "dependencies":
  {
    "express": "^4.18.2"
  }
}
 

Create an app.js file with an HTTP server that will return Hello world. 

Copy code below: 

const express = require('express');
const app = express();
 
// This tells the app which port to listen to :


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port`)
})
 
//This shows the response that will sent to the user:


app.get("/", (req,res) => {
    res.send('Hello World')
})
 
 


Using your terminal or command line.
Run The Application

$nodejs-app

The app is now ready to launch: 


//It will show you on your terminal Server is running on port 5000
cd nodejs-app

Now that you have some source code and a Dockerfile, it’s time to build your first image with the command below:

docker build -t nodejs-app .

Start a container based on your new image:

docker run -d -p 5000:5000 nodejs-app

Visit your application in a browser at http://localhost:5000 . 

You should see your hello world application up and successfully running.

Step 2 - Create A DockerFile
What is a Dockerfile: A Dockerfile is an ingredient or set of instructions needed to create a docker image(s). It gets to build the image by running the build command.
Create a file in the root directory called Dockerfile.
The first thing is we need to define which image we want to build from. Here we will use version 16 of the node available from Docker Hub:

Copy Dockerfile code below:

FROM node:16.18.0

Next, create the working directory for your application.

#Create app directory
 
WORKDIR /app

Install the app dependencies using the npm binary.

#Install app dependencies
COPY package*.json  ./
 


Copy command below and run on terminal:
RUN npm install


Copy the rest of the application to the app directory.
COPY . /app

Copy code below:
Expose the port and start the application.
EXPOSE 5000
CMD [ "npm", "start" ]


NOTE: Above you will notice we used two distinct COPY commands to reduce the application rebuild time
Create a .dockerignore file
What is a .dockerignore file:  It helps prevent the local module and debug logs from being copied into your Docker image. 
Create a .dockerignorefile file so as not to copy unnecessary files to the container during its built process from the logs. 
 
Copy code below: 
npm-debug.log
/node_modules

//This prevents the local module and debug logs from being copied onto your Docker image.


Step 3 - Building your Docker Image
What is Docker Image: 
This is a set of read-only instructions that helps to build a container and makes it possible to run it on a Docker. 

Building your Docker image is quite easy and can be done using a single command.
But before building it, look at the image below to confirm you have the displayed files and directories on your code editor. If you can’t or don’t have the codes. 
You can fork a folder repo here from my GitHub account.  to build yours.


If confirmed, you can run this command on your terminal or CLI tool. 

Docker build -t <docker-image-name> <filepath> .
  
The -t flag lets you tag your image so it’s easier to find later
Here is an example command of what we will be running with to build our docker iamge

Copy code below:  
Docker build -t nodejs-app .
  
You will get a terminal message "FINISHED" if it is successfully built. 
Navigate to your downloaded Docker Desktop or check your Vscode Registry to view the created image. 
There you can further to build andcreate your containers.
