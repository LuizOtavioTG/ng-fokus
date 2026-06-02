const express = require('express');
const webpush = require('web-push');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const VAPID_PUBLIC_KEY = 'sua-public-key';
const VAPID_PRIVATE_KEY = 'sua-private-key';


let subscriptions = [];
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({});
});


app.post('/send-notification', async (req, res) => {
  const { title, body } = req.body;
  const notifications = subscriptions.map(subscription => {
    return webpush.sendNotification(subscription, JSON.stringify({ title, body }));
  });

  try {
    await Promise.all(notifications);
    res.status(200).json({ message: 'Notificações enviadas com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar notificações:', error);
    res.status(500).json({ error: 'Falha ao enviar notificação' });
  }
});


webpush.setVapidDetails('mailto:seu-email@exemplo.com', VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});