import express from 'express';
import config from './config';
import server from './renderers/server';
import data from './testData';

const app = express();

app.use(express.static('public')); 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = server();
  res.render('index', { initialContent });
});

app.get('/data', (_, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`running on ${config.port}...`);
});