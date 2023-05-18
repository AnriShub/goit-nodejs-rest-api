FROM node

WORKDIR /goit-nodejs-rest-api

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "/server"]