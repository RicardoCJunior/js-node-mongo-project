const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

// Importa suas rotas
const orderRoutes = require('./src/routes/orderRoutes');
app.use('/orders', orderRoutes); // prefixo para organizar melhor

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log(' MongoDB conectado');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(` Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

// Rota de teste
app.get('/ping', (req, res) => {
  res.json({ message: 'Servidor ativo!' });
});
