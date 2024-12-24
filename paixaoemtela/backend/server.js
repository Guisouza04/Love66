const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.post('/api/formulario', (req, res) => {
  const dados = req.body;
  console.log('Dados recebidos:', dados);

  // Gerar um ID único para o pagamento
  const pagamentoId = Math.floor(Math.random() * 1000000);

  // Retornar o ID para o frontend
  res.json({ pagamentoId });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});