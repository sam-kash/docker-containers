### install node 
### run npm install
### node index.js

FROM node:22-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package.json
RUN npm install 

COPY . .


EXPOSE 3000

CMD ["node" , "index.js"]