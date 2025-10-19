const express = require("express")

const app = express();

app.get('/', (req, res)=>{
    res.send("Simple express server to test Docker file for each microservice")
})

app.get('/service', (req, res) =>{
    res.send(`<html>
        <Title>DOCKER SERVICE FOR NODE</Title>
        <head></head>
        <body>
        <h1> Hey docker </h1>
        </body>
        </html>   
        `)
})

app.listen(3000)

console.log("ENV VARIABLE");
console.log(process.env.DATABASE_URL)