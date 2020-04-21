FROM node:12-alpine AS appbuild

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY main.js main.js
COPY ./config ./config

EXPOSE 8000

CMD [ "node", "main.js" ]
