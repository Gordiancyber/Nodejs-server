Dockerizing a Node.js web app

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
Here is the code: 

const express = require('express');
const app = express();
 
// This tells the app which port to listen to
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port`)
})
 
//This shows the response that will sent to the user
app.get("/", (req,res) => {
    res.send('Hello World')
})
 
 


Using your terminal or command line.
Run The Application
The app is now ready to launch: 

$node app.js

//It will show you on your terminal Server is running on port 5000
cd nodejs-app

Now that you have some source code and a Dockerfile, it’s time to build your first image with the command below:

docker build -t nodejs-app .

Start a container based on your new image:

docker run -d -p 5000:5000 nodejs-app

Visit your application in a browser at http://localhost:5000 . 

You should see your hello world application up and successfully running.
