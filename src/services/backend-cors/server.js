const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Habilitar CORS
app.use(cors());

// Configuração do Proxy
app.use(express.json());

app.use("/api", async (req, res) => {
  const apiUrl = "https://api.hgbrasil.com/weather?key=9659d497"; // Substitua pela URL da API externa
  const { lat, lon } = req.query;

  try {
    if (lat && lon) {
      const response = await axios.get(
        `${apiUrl}&lat=${lat}&lon=${lon}&user_ip=remote`
      );

      res.status(response.status).json(response.data);
    } else {
      throw new Error("Coordenadas não fornecidas");
    }
  } catch (error) {
    res.status(error.response?.status || 500).json(error.response?.data || { message: "Erro interno" });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
