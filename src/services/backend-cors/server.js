const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(cors());

const API_KEY = "9659d497";
const BASE_URL = "https://api.hgbrasil.com/weather";

app.get("/api/city", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ message: "Coordenadas (lat, lon) são obrigatórias" });
  }

  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&lat=${lat}&lon=${lon}`
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Erro ao buscar os dados" });
  }
});

app.get("/api/weatherdata", async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ message: "Coordenadas (lat, lon) são obrigatórias" });
  }

  try {
    const datas = obterInicioFimSemana();

    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&lat=${lat}&lon=${lon}&array_limit=7&fields=only_results,city_name,forecast,date,max,min,humidity,rain_probability,wind_speedy,description,condition`
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Erro ao buscar os dados" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
