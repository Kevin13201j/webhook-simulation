const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/webhook-pago', (req, res) => {
  console.log('✅ Webhook recibido:', req.body);
  res.json({ mensaje: 'Webhook procesado correctamente' });
});

app.listen(port, () => {
  console.log(`Receptor WebHook escuchando en http://localhost:${port}`);
});
