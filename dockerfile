FROM node:latest

WORKDIR /usr/app

COPY package.json .
COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 3000

CMD ["node", "backend", "server.js"]

