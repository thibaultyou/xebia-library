FROM node:alpine as build

WORKDIR /client

ADD package.json .

RUN npm install

ADD . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /client/build/ /var/www

ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
