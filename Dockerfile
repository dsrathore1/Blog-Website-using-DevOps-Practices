#! Stage 1 - Build Stage
FROM node:lts-slim as build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]