import axios from "axios";

export default {
  async getCityByGeolocation() {
    if (!navigator.geolocation) throw new Error("Geolocalização não é suportada pelo navegador.");

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true, timeout: 10000, maximumAge: 0
        });
      });

      const { latitude, longitude } = position.coords;
      const response = await axios.get("http://localhost:3000/api/city", { params: { lat: latitude, lon: longitude } });

      if (response.data?.results?.city) {
        return response.data.results.city;
      } else {
        throw new Error("Localização não encontrada na resposta da API.");
      }
    } catch (error) {
      if (error.code === error.PERMISSION_DENIED || error.message.includes("Denied")) {
        throw new Error("Permissão de localização negada.");
      } else if (error.code === error.POSITION_UNAVAILABLE || error.message.includes("Unavailable")) {
        throw new Error("A localização não está disponível.");
      } else if (error.code === error.TIMEOUT || error.message.includes("Timeout")) {
        throw new Error("Tempo de espera para localização esgotado.");
      } else if (error.response) {
        throw new Error(`Erro na resposta da API: ${error.response.data}`);
      } else {
        throw new Error(`Erro desconhecido ao acessar a localização: ${error.message}`);
      }
    }
  },
};
