FROM node:10

RUN mkdir -p /usr/local/app
RUN mkdir -p /usr/local/conf

WORKDIR /usr/local/app
COPY ./package.json /usr/local/app

RUN npm install

EXPOSE 8080
CMD [ "npm", "run", "start" ]
