### install node 
### run npm install
### node index.js

FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["node" , "index.js"]