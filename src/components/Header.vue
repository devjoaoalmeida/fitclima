<template>
  <header>
    <h1>FitClima</h1>
    <section id="city-info" class="city-info">
      <span id="city-name">{{ cityName }}</span>
    </section>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/informe">Informe-se</router-link></li>
        <li>
          <template v-if="isLoggedIn">
            <router-link to="/dashboard">Perfil</router-link>
          </template>
          <template v-else>
            <router-link to="/login">Login</router-link>
          </template>
        </li>
        <li>
          <template v-if="isLoggedIn">
            <a @click="logout" class="nav-button">Sair</a>
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { auth } from "../services/firebaseconfig.js";
import geolocationService from "../services/geolocationService.js";
import weatherService from "../services/weatherService.js";

export default {
  name: "Header",
  data() {
    return {
      cityName: "",
      isLoggedIn: false,
      weatherForecast: "",  // Armazena apenas o forecast
    };
  },
  async mounted() {
    auth.onAuthStateChanged((user) => {
      this.isLoggedIn = !!user;
      if (user && this.$route.path === "/login") {
        this.$router.push("/dashboard");
      }
    });
    this.initializeCity();

    // Buscando o forecast
    try {
      const forecastData = await weatherService.getWeatherData();  // Chamado apenas para o forecast
      if (Array.isArray(forecastData)) {  // Verificação se o dado recebido é um array
        localStorage.setItem("weatherData", JSON.stringify(forecastData));
        const storedData = JSON.parse(localStorage.getItem("weatherData"));
        if (storedData) {
          this.weatherForecast = storedData;  // Salva o forecast no state
        } else {
          console.log('Não há dados no localStorage.');
        }
      } else {
        console.log('Dados meteorológicos não são válidos');
      }
    } catch (error) {
      console.error("Erro ao buscar dados meteorológicos:", error);
    }
  },
  methods: {
    async initializeCity() {
      try {
        const savedCity = localStorage.getItem("userCity");
        if (savedCity) {
          this.cityName = savedCity;
        } else {
          const city = await geolocationService.getCityByGeolocation();
          this.cityName = city;
          localStorage.setItem("userCity", city);
        }
      } catch (error) {
        console.error("Erro ao buscar localização:", error);
      }
    },
    logout() {
      auth
        .signOut()
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Erro ao sair:", error);
        });
    },
  },
};
</script>
