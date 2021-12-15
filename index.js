const url = require('url');
const qs = require('querystring');
const express = require('express');
const axios = require('axios');
const jwt_decode = require('jwt-decode');
const _ = require('lodash');
const path = require('path');
const config = require('config');

const { AuthData } = require('./models')

// const client_id = 'c5e9efbe-33a8-48ec-9879-53000b074542';
const redirect_uri = 'https://test3.services.mobilon.ru/';
const client_secret = 'CPCr6PNVfarfu59vy2ORIAHRGD2EzLvkbQ0Kzeow2XhgkhromjQ0M67Sa49WFbop';

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/', async (req, res) => {
  console.log('req.query', req.query)
  if (_.isEmpty(req.query)) {
    console.log('no req.query');
    res.render('button', {client_id});
  } else {
    res.send('OK');
  }

  // console.log(req, res);
  const myUrl = url.parse(req.originalUrl);

  console.log('url', myUrl);
  const params = qs.parse(myUrl.query);

  console.log('qs', params);


  const domain = params.referer;

  if (!domain) { return; }

  const { code, client_id } = params;

  const urlDomain = `https://${domain}/oauth2/access_token`;
  const data =  {
    client_id,
    client_secret,
    grant_type:	'authorization_code',
    code,
    redirect_uri,
  };
  // console.log('data', urlDomain, data);

  let resp;
  try {
    resp = (await axios.post(urlDomain, data)).data;
  }catch (e) {
    console.log(e);
    return;
  }

  const accessToken = resp.access_token;
  const refreshToken = resp.refresh_token;

  console.log('resp', {accessToken, refreshToken});
  var decoded = jwt_decode(accessToken);
  console.log('decoded', decoded);

  const authData = await AuthData.findOne({ clientId: client_id });
  if (!authData) {
    const authData = await AuthData.create({
      clientId: client_id,
      code,
      accessToken,
      refreshToken,
      domain,
    });
    console.log({ authData });
  } else {
    console.log(`clientId ${client_id} already exists`);
  }  
});

app.get('/api/leads', async (req, res) => {
  console.log('/leads');

});

app.listen(config.get('apps.auth-server.port'), () => {
  console.log('Auth server has been started', config);
});

