FROM node:16-alpine

WORKDIR /usr/app

COPY . ./

RUN yarn && yarn build

CMD ["yarn", "start"]
