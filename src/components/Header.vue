<template>
  <header>
    <div class="site-city">
      <h1>FitClima</h1>
      <section id="city-info" class="city-info">
        <span id="city-name">Cidade: {{ cityName }}</span
        ><br />
      </section>
    </div>
    <nav class="menu">
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
        <li v-if="isLoggedIn">
          <a @click="logout" class="nav-button">Sair</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { auth } from "../services/firebaseconfig.js";
import geolocationService from "../services/geolocationService.js";

export default {
  name: "Header",
  data() {
    return {
      cityName: "",
      latitude: "",
      longitude: "",
      isLoggedIn: false,
      openMenu: false
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
    document.body.style.overflow = "";
  },
  methods: {
    async initializeCity() {
      try {
        const savedCity = localStorage.getItem("userCity");
        const savedLat = localStorage.getItem("userLatitude");
        const savedLon = localStorage.getItem("userLongitude");

        if (savedCity && savedLat && savedLon) {
          this.cityName = savedCity;
          this.latitude = savedLat;
          this.longitude = savedLon;
        } else {
          const city = await geolocationService.getCityByGeolocation();
          this.cityName = city;
          localStorage.setItem("userCity", city);

          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;

              this.latitude = lat;
              this.longitude = lon;

              localStorage.setItem("userLatitude", lat);
              localStorage.setItem("userLongitude", lon);
            },
            (error) => {
              console.error("Erro ao obter coordenadas:", error.message);
            }
          );
        }
      } catch (error) {
        console.error("Erro ao buscar localização:", error);
      }
    },
    toggle() {
      this.openMenu = !this.openMenu;

      if(this.openMenu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
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
