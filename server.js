const express = require('express');
const config = require('./lib/config');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('index', {answer: 43});
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
