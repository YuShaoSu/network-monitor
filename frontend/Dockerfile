FROM node:10

EXPOSE 8081

WORKDIR app

COPY package-lock.json /app/
COPY babel.config.js /app/
COPY vue.config.js /app/

RUN npm install

CMD npm run serve


