Dockerizing a Node.js web app

The aim of this is to show you how to get a Simple Node.js server app into a Docker container.

Development
To get a local copy of the code, clone it using git:

git clone https://github.com/gordiancyber/nodejs-server.git
cd nodejs-app
Now that you have some source code and a Dockerfile, it’s time to build your first image:

docker build -t nodejs-app .
Start a container based on your new image:

docker run -d -p 5000:5000 nodejs-app
Visit your application in a browser at http://localhost:5000 . 
You should see your hello world application up and running.