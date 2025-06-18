const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/simular-pago', async (req, res) => {
  const data = {
    id: Math.floor(Math.random() * 10000),
    monto: req.body.monto || 100,
    cliente: req.body.cliente || 'Anonimo',
    estado: 'pagado'
  };

  try {
    const response = await axios.post('http://receptor:5000/webhook-pago', data);
    res.json({ mensaje: 'Pago simulado y webhook enviado', data, respuesta: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar webhook', detalles: error.message });
  }
});

app.listen(port, () => {
  console.log(`Emisor WebHook corriendo en http://localhost:${port}`);
});
