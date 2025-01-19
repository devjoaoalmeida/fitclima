<template>
  <div>
    <Header />
    <main>
      <div>
        <h1>Bem-vindo ao FitClima!</h1>
        <span id="current-date">{{ currentDate }}</span>
      </div>
      <div>

        <div class="add-icon" @click="openForm">+</div>

        <div v-if="isModalVisible" class="overlay" @click.self="closeForm">
          <div class="form-container">
            <form @submit.prevent="handleSubmit">
              <h2>{{ isEditing ? 'Editar Atividade Física' : 'Adicionar Atividade Física' }}</h2>

              <label for="activity">Atividade Física:</label>
              <input type="text" id="activity" v-model="formData.activity" required placeholder="Ex: Corrida"/>

              <label for="day">Dia da Semana:</label>
              <select id="day" v-model="formData.day" required>
                <option value="segunda-feira">Segunda-feira</option>
                <option value="terca-feira">Terça-feira</option>
                <option value="quarta-feira">Quarta-feira</option>
                <option value="quinta-feira">Quinta-feira</option>
                <option value="sexta-feira">Sexta-feira</option>
                <option value="sabado">Sábado</option>
                <option value="domingo">Domingo</option>
              </select>

              <label for="time">Horário:</label>
              <input type="time" id="time" v-model="formData.time" required />

              <button type="submit">{{ isEditing ? 'Salvar' : 'Adicionar' }}</button>
              <button type="button" v-if="isEditing" @click="closeForm">Cancelar</button>
            </form>
          </div>
        </div>

        <div class="activity-list">
          <div 
            v-for="(activity, index) in activities" 
            :key="activity.id || index" 
            class="activity-card"
          >
            <p><strong>Atividade:</strong> {{ activity.activity }}</p>
            <p><strong>Dia:</strong> {{ activity.day }}</p>
            <p><strong>Data:</strong> {{ formatDate(activity.day) }}</p>
            <p><strong>Horário:</strong> {{ activity.time }}</p>

            <p><strong>Previsão do Tempo:</strong></p>
            <p>Temperatura: {{ activity.weatherInfo?.temperature || "Sem dados" }}°C</p>
            <p>Máxima: {{ activity.weatherInfo?.maxTemperature || "Sem dados" }}°C</p>
            <p>Mínima: {{ activity.weatherInfo?.minTemperature || "Sem dados" }}°C</p>
            <p>Probabilidade de Chuva: {{ activity.weatherInfo?.rainProbability || "Sem dados" }}%</p>
            <p>Umidade: {{ activity.weatherInfo?.humidity || "Sem dados" }}%</p>
            <p>Velocidade do Vento: {{ activity.weatherInfo?.windSpeed || "Sem dados" }}</p>

            <button @click="editActivity(index)">Editar</button>
            <button @click="removeActivity(index)">Remover</button>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { db, collection, getDocs, addDoc, updateDoc, deleteDoc } from '../services/firebaseconfig.js'; // Ajuste o caminho conforme necessário
import weatherService from '../services/weatherService.js';

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isModalVisible: false,
      isEditing: false,
      editIndex: null,
      formData: {
        activity: "", 
        day: "segunda-feira", 
        time: "",
        weatherInfo: {
          temperature: "",
          maxTemperature: "",
          minTemperature: "",
          rainProbability: "",
          humidity: "",
          windSpeed: "",
        },
      },
      activities: [], 
      maxCards: 15, 
      currentDate: "",
      weekEndDate: "",
      daysOfWeek: [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
      ],
    };
  },
  methods: {
    updateCurrentDate() {
      const today = new Date();
      const dayOfWeek = this.daysOfWeek[today.getDay()];
      const date = today.toLocaleDateString("pt-BR");
      this.currentDate = `${dayOfWeek}, ${date}`;
    },
    calculateWeekEndDate() {
      const today = new Date();
      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + 6);
      this.weekEndDate = endOfWeek.toLocaleDateString("pt-BR");
    },
    openForm() {
      this.isModalVisible = true;
    },
    closeForm() {
      this.isModalVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.formData = { activity: "", day: "segunda-feira", time: "" };
      this.isEditing = false;
      this.editIndex = null;
    },
    async handleSubmit() {
      if (this.activities.length >= this.maxCards) {
        alert("Você já atingiu o limite máximo de 15 atividades!");
        return;
      }

      try {
        // Criar o objeto `newActivity` com os dados do formulário e previsão do tempo
        const newActivity = {
          activity: this.formData.activity,
          day: this.formData.day,
          time: this.formData.time,
        };

        if (this.isEditing && this.editIndex !== null) {
          // Atualizar atividade existente
          const docRef = this.activities[this.editIndex].docRef;
          await updateDoc(docRef, newActivity);
          this.activities[this.editIndex] = { ...newActivity, docRef };
        } else {
          // Adicionar nova atividade
          const docRef = await addDoc(collection(db, 'activities'), newActivity);
          this.activities.push({ ...newActivity, docRef });
        }

        this.closeForm();
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro ao adicionar a atividade. Tente novamente.");
      }
    },


    async editActivity(index) {
      try {
        const activity = this.activities[index];
        this.formData = { ...activity };
        this.isEditing = true;
        this.editIndex = index;
        this.openForm();
      } catch (error) {
        console.error("Erro ao editar atividade:", error);
      }
    },
    async removeActivity(index) {
      try {
        const docRef = this.activities[index].docRef;
        await deleteDoc(docRef);
        this.activities.splice(index, 1);
      } catch (error) {
        console.error("Erro ao remover atividade:", error);
      }
    },
    formatDate(day) {
      const today = new Date();
      const dayMap = {
        'domingo': 0,
        'segunda-feira': 1,
        'terca-feira': 2,
        'quarta-feira': 3,
        'quinta-feira': 4,
        'sexta-feira': 5,
        'sabado': 6,
      };

      const targetDay = dayMap[day];
      const targetDate = new Date(today);
      const daysToAdd = (targetDay - today.getDay() + 7) % 7;
      targetDate.setDate(today.getDate() + daysToAdd);

      const formattedDate = targetDate.toLocaleDateString("pt-BR", { day: '2-digit', month: '2-digit'});
      return `${formattedDate}`;
      
    },
    async mounted() {
      this.updateCurrentDate();
      this.calculateWeekEndDate();

      try {
        const querySnapshot = await getDocs(collection(db, 'activities'));
        this.activities = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          docRef: doc.ref,
          weatherInfo: null, // Inicialmente vazio
        }));
        console.log("Atividades carregadas:", this.activities)

        // Após carregar atividades, buscar dados climáticos para cada uma
        await this.fetchWeather();
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }
    },

    async fetchWeather() {
      for (const activity of this.activities) {
        try {
          const weatherData = await weatherService.getWeatherData();
          activity.weatherInfo = weatherData; 
          console.log("Dados climaticos para a atividade:", activity)
        } catch (error) {
          console.error("Erro ao buscar informações climáticas:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
.add-icon {
  position: fixed;
  bottom: 60px;
  right: 30px;
  background-color: #234f7e;
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.add-icon:hover {
  background-color: #212d39;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.form-container {
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
}

.form-container form {
  display: flex;
  flex-direction: column;
}

.form-container label {
  margin-bottom: 8px;
  font-size: 14px;
}

.form-container input,
.form-container select {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.form-container button {
  background-color: #234f7e;
  color: #fff;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-container button:hover {
  background-color: #212d39;
}

.activity-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.activity-card {
  background-color: #f9f9f9;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.activity-card button {
  margin-top: 10px;
  background-color: #234f7e;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
