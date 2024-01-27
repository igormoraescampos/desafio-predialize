FROM node:lts-alpine
WORKDIR /api
COPY package.json /api
COPY clients.mock.js /api
COPY ./src /api/src
RUN npm install
COPY . .
EXPOSE 3000
RUN chown -R node /api
USER node
CMD [ "npm", "run", "build" ]