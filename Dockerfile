FROM node:16-alpine

WORKDIR /usr/app

COPY . ./

RUN yarn

EXPOSE 8080

CMD ["yarn", "dev"]
