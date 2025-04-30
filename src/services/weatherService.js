import axios from "axios";

export default {
  async loadWeatherData() {
    try {
      const { latitude, longitude } = await this.getUserLocation();
      this.weatherData = await this.getWeatherData(latitude, longitude);
      console.log("Dados meteorológicos atualizados via API:", this.weatherData);
    } catch (error) {
      console.error("Erro ao carregar os dados meteorológicos:", error.message);
    }
  },

  async getUserLocation() {
    if (!navigator.geolocation) throw new Error("Geolocalização não é suportada pelo navegador.");
    
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(new Error("Erro ao obter a localização do usuário: " + error.message)),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    });
  },

  async getWeatherData(lat, lon) {
    try {
      const response = await axios.get("https://api-tj65aqhppa-uc.a.run.appapi/weatherdata", { params: { lat, lon } });
      
      if (response.data?.forecast?.length) {
        return response.data.forecast;
      } else {
        throw new Error("Dados meteorológicos não contêm previsão ou estão em formato inválido");
      }
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        throw new Error("Tempo de resposta da API expirado.");
      } else if (error.response) {
        throw new Error("Erro na resposta da API");
      } else {
        throw new Error(error.message);
      }
    }
  },
};
