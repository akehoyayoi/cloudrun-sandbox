import express from 'express'
import bodyParser from 'body-parser'
import axios from "axios";

require('dotenv').config()

const app = express()
app.use(bodyParser.json())

const client = axios.create({
  baseURL: 'https://us-central1-akehoyayoi-demo.cloudfunctions.net/',
  timeout: 5000
});

const querystring = require('querystring');

app.get('/test', (req, res) => {
  
  res.status(200).send({ message: 'test' })
})

app.get('/test1', (req, res) => {
  client.post('/test1',{
    data: {}
  })
  .then(function(response: any) {
    console.log(response);
    res.status(200).send({ message: response.data });
  })
  .catch(function (error: any) {
    console.log(error);
    res.status(200).send({ message: error });
  }); 
})

app.get('/test2', (req, res) => {
  res.status(200).send({ message: 'test2' })
})

app.listen(process.env.PORT || 3000)
