<template>
  <div>
    <h1>Status da API</h1>
    <p>{{ status }}</p>

    <div v-if="dados">
      <h2>📍 Cidade: {{ dados.city_name }}</h2>
      <!-- Laço para pegar os 7 dias de previsão -->
      <div v-for="(dia, index) in dados.forecast.slice(0, 7)" :key="index">
        <div>
          <h3>{{ formatDate(dia.date) }}</h3>
          <p>🌡️ Temperatura máxima: {{ dia.max }}°C</p>
          <p>🌡️ Temperatura mínima: {{ dia.min }}°C</p>
          <p>☁️ Descrição: {{ dia.description }}</p>
          <p>🌧️ Probabilidade de chuva: {{ dia.rain_probability }}%</p>
          <p>💧 Umidade: {{ dia.humidity }}%</p>
          <p>💨 Vento: {{ dia.wind_speedy }}</p>
          <hr />
        </div>
      </div>
    </div>

    <p v-if="!dados && status === '✅ API funcionando!'">🔄 Carregando dados...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const status = ref('Verificando...')
const dados = ref(null)

onMounted(async () => {
  const lat = localStorage.getItem('userLatitude')
  const lon = localStorage.getItem('userLongitude')

  if (lat && lon) {
    status.value = '📡 Coordenadas encontradas no cache. Buscando clima...'
    try {
      const resposta = await fetch(`http://localhost:3000/api/weatherdata?lat=${lat}&lon=${lon}`)
      if (resposta.ok) {
        const json = await resposta.json()
        console.log('Dados crús da API:', json)
        status.value = '✅ API funcionando!'
        dados.value = json
      } else {
        status.value = `⚠️ Erro da API: ${resposta.status}`
      }
    } catch (erro) {
      status.value = '❌ Erro ao conectar à API.'
    }
  } else {
    status.value = '❌ Coordenadas não encontradas no cache.'
  }
})
  const formatDate = (dateString) => {
    // Extrair dia e mês da string de data
    const [day] = dateString.split('-')
    const currentYear = new Date().getFullYear() // Pega o ano atual
  
    // Retorna o formato "Dia de Mês de Ano"
    return `${day}/${currentYear}`
  }
</script>
  