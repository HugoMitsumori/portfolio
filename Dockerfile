FROM node:14.7-alpine

LABEL Image for Personal portfolio

RUN apk add git python2 make g++ vim
RUN npm install -g @vue/cli @vue/cli-service-global

WORKDIR /app

EXPOSE 8080
CMD [ "npm", "run" , "serve" ]
