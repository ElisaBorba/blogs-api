FROM node:16.14
RUN apt update
RUN apt install lsof
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src src
COPY .eslintignore .
COPY .eslintrc.json .
COPY .sequelizerc .
COPY jest.config.js .
