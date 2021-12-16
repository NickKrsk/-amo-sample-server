const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const accounts = [
    {
      clientId: "80998f8e-0f3c-4e57-be3b-e3f84f2109f8",
      code: "def5020067262a72800023dfecf113a40df8955ea5dc002013bbc1a6439f61850a61de...",
      accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJjNjljYTVjNTcwMmIwMTUzZW...",
      domain: "mobilonwidgets.amocrm.ru"
    }
  ];
  res.render('index', { accounts });
});


module.exports = router;