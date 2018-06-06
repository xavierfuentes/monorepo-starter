'use strict';

const express = require('express');
const request = require('request');

const app = express();
const apiServerHost = 'http://api-host.url/';

app.get('/', function(req, res) {
  req.pipe(request(`${apiServerHost}endpoint/`)).pipe(res);
});

app.listen(process.env.PORT || 4000);
