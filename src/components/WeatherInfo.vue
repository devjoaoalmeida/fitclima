<template>
  <div class="weather-info" v-if="previsao">
    <p><strong>Condição:</strong> {{ previsao.description }}</p>
    <p><strong>Máx:</strong> {{ previsao.max }}°C | <strong>Mín:</strong> {{ previsao.min }}°C</p>
    <p><strong>Umidade:</strong> {{ previsao.humidity }}%</p>
    <p><strong>Probabilidade de Chuva:</strong> {{ previsao.rain_probability }}%</p>
    <p><strong>Velocidade do Vento:</strong> {{ previsao.wind_speedy }}</p>
    <p><strong>Recomendação:</strong> {{ previsao.recommendation }}</p>
  </div>
  <div v-else>
    <p>Previsão não disponível.</p>
  </div>
</template>

<script>
export default {
  name: "WeatherInfo",
  props: {
    previsao: {
      type: Object,
      required: false,
      default: null
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/home.css";
</style>
