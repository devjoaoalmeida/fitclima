import axios from "axios";

export default {
  async getCityByGeolocation() {
    if (!navigator.geolocation) {
      return Promise.reject("Geolocalização não suportada neste navegador.");
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get("http://localhost:3000/api/city", {
              params: { lat: latitude, lon: longitude },
            });

            if (response.data?.results?.city) {
              resolve(response.data.results.city);
            } else {
              reject("Localização não encontrada na resposta da API.");
            }
          } catch (error) {
            reject(`Erro ao buscar localização no backend: ${error.message}`);
          }
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject("Permissão de localização negada.");
              break;
            case error.POSITION_UNAVAILABLE:
              reject("A localização não está disponível.");
              break;
            case error.TIMEOUT:
              reject("Tempo de espera para localização esgotado.");
              break;
            default:
              reject("Erro desconhecido ao acessar a localização.");
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } 
      );
    });
  },
};
