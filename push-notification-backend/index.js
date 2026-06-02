const express = require('express');
const webpush = require('web-push');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const VAPID_PUBLIC_KEY = 'sua-public-key';
const VAPID_PRIVATE_KEY = 'sua-private-key';

webpush.setVapidDetails('mailto:seu-email@exemplo.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});