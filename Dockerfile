FROM node:16.18.0

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY . /app

CMD [ "npm", "start" ] 