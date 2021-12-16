const express = require('express');
const config = require('config');
const cors = require('cors');
const moment = require('moment');
const {v4: uuidv4} = require('uuid');
const app = express();

const { Videomeet } = require('../../models')

app.use(express.json());
app.use(cors());

app.post('/videomeets', async (req, res) => {
  console.log('add videomeet', req.body);
  const { videomeetDate, phone } = req.body;
  const vmeet = await Videomeet.create({
    videomeetId: uuidv4(),
    createDate: new Date,  
    videomeetDate,
    phone,       
  });
  res.sendStatus(200);
});

app.get('/videomeets', async (req, res) => {
  console.log('get videomeets');
});

app.listen(config.get('apps.api.port'), () => {
  console.log('API server has been started', config);
});