const express = require('express');

const app = express();

app.use(function(_req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  
  next()
})

app.get('/data', (_req, res) => {
  res.json({
    name: 'Bangladesh',
    description: 'Land of emotions'
  })
})

app.delete('/data', (_req, res) => {
  res.json({
    name: 'Bangladesh',
    description: 'Land of emotions'
  })
})

app.listen(3000)