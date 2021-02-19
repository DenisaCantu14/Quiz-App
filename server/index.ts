import { isArray } from "util";


const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
const r = require('./FileClass.js').usersRepository //import din fisierul fisier.js

app.use(cors());
const repo = new r('Users.json');
const port = 3000;
const uid = require('uid');

app.get('/users-list', async (req, res) => { 
  let users = await repo.getAll();
  res.send(users);
});

app.post('/add-user', async (req, res) => {
  const userData = req.body;
  await repo.addUser(userData);
  let users = await repo.getAll();
  res.statusCode = 201;
  res.send(users);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
export default app.post;


