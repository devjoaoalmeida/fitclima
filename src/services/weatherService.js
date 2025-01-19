import axios from "axios";

export default {
  data() {
    return {
      weatherData: null,
    };
  },
  mounted() {
    this.loadWeatherData();
  },
  methods: {
    async loadWeatherData() {
      try {
        const storedData = JSON.parse(localStorage.getItem("weatherData"));

        if (storedData) {
          this.weatherData = storedData;
          console.log("Dados meteorológicos carregados do localStorage:", this.weatherData);
        } else {
          // Se não tiver dados no localStorage, buscar via API
          const weatherData = await this.getWeatherData();
          this.weatherData = weatherData;
          
          // Salvar no localStorage
          localStorage.setItem("weatherData", JSON.stringify(weatherData));
          console.log("Dados novos carregados via API e salvos no localStorage");
        }

      } catch (error) {
        console.error("Erro ao carregar os dados meteorológicos:", error);
      }
    },

    async getWeatherData() {
      try {
        const response = await axios.get(`http://localhost:3000/api/weatherdata`);
    
        if (response && response.data) {
          console.log('Dados recebidos da API:', response.data);
          const weather = response.data;
    
          if (weather && weather.forecast && Array.isArray(weather.forecast)) {
            console.log("Previsões encontradas:", weather.forecast);
            const forecastArray = weather.forecast;  // Extrai o array corretamente
            return forecastArray;
          } else {
            throw new Error("Dados meteorológicos não contém previsão ou formato inválido");
          }
        } else {
          throw new Error("Dados meteorológicos não encontrados");
        }
      } catch (error) {
        if (error.code === 'ECONNABORTED') {
          throw new Error("Tempo de resposta da API expirado.");
        } else if (error.response) {
          console.error("Erro na resposta da API:", error.response.data);
          throw new Error("Erro na resposta da API");
        } else if (error.request) {
          console.error("Erro na requisição:", error.request);
          throw new Error("Erro ao fazer a requisição à API");
        } else {
          console.error("Erro desconhecido:", error.message);
          throw new Error(`Erro ao buscar os dados meteorológicos: ${error.message}`);
        }
      }
    }      
  },
};
