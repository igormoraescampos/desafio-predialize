FROM node:lts-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install --force --silent
COPY . .
EXPOSE 8080
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=angular app/dist/app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf