FROM node:16.18.0

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . /app

EXPOSE 5000

CMD [ "npm", "start" ] 