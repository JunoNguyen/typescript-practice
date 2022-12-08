const express = require('express')
// import session from 'express-session';
const dotenv = require('dotenv').config();
// import { createConnection, getConnection, getRepository } from 'typeorm';
// import { Repository } from 'typeorm';
// import { SessionEntity } from 'typeorm-store';
// import { TypeormStore } from 'typeorm-store';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);