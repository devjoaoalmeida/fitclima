<template>
  <header>
    <h1>FitClima</h1>
    <section id="city-info" class="city-info">
      <span id="city-name">{{ cityName }}</span> <!-- Nome da cidade -->
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
            <button @click="logout" class="nav-button">Sair</button> <!-- Botão para logout -->
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import { auth } from "../services/firebaseconfig.js"; // Importa o auth do firebaseconfig.js

export default {
  name: "Header",
  data() {
    return {
      cityName: "", // Cidade inicial (vazia)
      isLoggedIn: false, // Inicialmente, o usuário não está logado
    };
  },
  mounted() {
    // Monitorar o estado de autenticação com Firebase
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        if (this.$route.path === "/login") {
          this.$router.push("/dashboard"); // Redireciona para o dashboard após login
        }
      } else {
        this.isLoggedIn = false;
      }
    });

    // Se o usuário permitir, tenta buscar automaticamente a localização
    this.autoDetectLocation();
  },
  methods: {
    getCityFromStorage() {
      return localStorage.getItem("userCity"); // Retorna a localidade armazenada, ou vazio caso não tenha
    },
    async autoDetectLocation() {
      // Verificar se o localStorage já tem o userCity salvo
      const savedCity = this.getCityFromStorage();
      if (savedCity) {
        this.cityName = savedCity;
        return; // Se já tiver, não faz a nova busca
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await axios.get(
                "http://localhost:3000/api", // Chama o backend
                {
                  params: {
                    lat: latitude,
                    lon: longitude,
                  },
                }
              );
              if (response.data && response.data.results) {
                const location = response.data.results; // Obtém os dados da localização e clima
                this.cityName = location.city || "";
                localStorage.setItem("userCity", location.city || ""); // Salva o userCity no localStorage
              } else {
                throw new Error("Localização não encontrada");
              }
            } catch (error) {
              console.error("Erro ao buscar localização:", error);
            }
          },
          (error) => {
            console.error("Erro ao acessar a localização:", error);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        console.error("Geolocalização não suportada neste navegador.");
      }
    },
    logout() {
      auth
        .signOut()
        .then(() => {
          this.$router.push("/"); // Redireciona para a home após deslogar
        })
        .catch((error) => {
          console.error("Erro ao sair:", error);
        });
    },
  },
};
</script>

<style scoped>
.city-info {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
}

.nav-button {
  border: none;
  background-color: unset;
  text-decoration: none;
  color: black;
  margin: 0 10px;
  font-weight: bold;
  font-size: 16px;
}

.nav-button:hover {
  color: rgb(100, 100, 100);
}
</style>
