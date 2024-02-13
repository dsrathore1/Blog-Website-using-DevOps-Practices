#! Stage 1 - Build Stage
FROM node:20-alpine3.19 as build

WORKDIR /app

COPY package.json .

RUN npm install --only=production

COPY . .

RUN npm run build

#! Stage 2 - Production Stage

FROM nginx:alpine-slim

RUN rm -rf ./*

WORKDIR /usr/share/nginx/html

COPY --from=build /app/.next  .

CMD [ "nginx", "-g", "daemon off;" ]