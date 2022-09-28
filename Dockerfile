FROM node:lts-alpine

ENV PORT 3000

WORKDIR /etc/app

COPY package.json /etc/app
COPY yarn.lock /etc/app

RUN yarn install

COPY . /etc/app

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn"]
