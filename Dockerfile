FROM node:alpine

WORKDIR /server

ADD package.json .

RUN npm install

ADD . .

EXPOSE 5000

CMD ["npm", "run", "server"]
