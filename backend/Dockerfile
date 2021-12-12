FROM node:14-alpine
WORKDIR /usr
COPY package.json ./
COPY tsconfig.json ./

COPY src ./src

RUN ls -a
RUN npm i
RUN npm run build

FROM node:14-alpine
WORKDIR /usr
COPY package.json ./
RUN npm i --only=production
COPY --from=0 /usr/dist .
RUN npm i pm2 -g
EXPOSE 80
CMD ["pm2-runtime", "app.js"]