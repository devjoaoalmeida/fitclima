<template>
  <div>
    <Header />
    <main>
      <div class="header-section">
        <h1>Bem-vindo ao FitClima!</h1>
        <span id="current-date">{{ currentDate }}</span>
      </div>

      <li><router-link to="/testeapi">STATUS API</router-link></li>

      <div class="add-section">
        <div class="add-icon" @click="openForm">+</div>

        <div v-if="isModalVisible" class="overlay" @click.self="closeForm">
          <div class="form-container">
            <form @submit.prevent="handleSubmit">
              <h2>
                {{
                  isEditing
                    ? "Editar Atividade Física"
                    : "Adicionar Atividade Física"
                }}
              </h2>
              <label for="activity">Atividade:</label>
              <input
                type="text"
                id="activity"
                v-model="formData.activity"
                required
                placeholder="Ex: Corrida"
              />

              <label for="day">Dia da Semana:</label>
              <select id="day" v-model="formData.day" required>
                <option v-for="day in daysOfWeek" :key="day" :value="day">
                  {{ day }}
                </option>
              </select>

              <button type="submit">
                {{ isEditing ? "Salvar" : "Adicionar" }}
              </button>
              <button type="button" v-if="isEditing" @click="closeForm">
                Cancelar
              </button>
            </form>
            <p v-if="formSaved" class="success-msg">
              Atividade salva com sucesso!
            </p>
          </div>
        </div>

        <div class="activity-list" v-if="!isLoading">
          <div v-for="day in daysOfWeek" :key="day" class="day-group">
            <div class="info-weather">
              <div v-if="previsaoDoDia[day]">
                <p>Recomendação: {{ previsaoDoDia[day].recommendation }}</p>
                <p>🌡️ Temperatura máxima: {{ previsaoDoDia[day].max }}°C</p>
                <p>🌡️ Temperatura mínima: {{ previsaoDoDia[day].min }}°C</p>
                <p>☁️ Descrição: {{ previsaoDoDia[day].description }}</p>
                <p>
                  🌧️ Probabilidade de chuva:
                  {{ previsaoDoDia[day].rain_probability }}%
                </p>
                <p>💧 Umidade: {{ previsaoDoDia[day].humidity }}%</p>
                <p>💨 Vento: {{ previsaoDoDia[day].wind_speedy }}</p>
                <hr />
              </div>
            </div>

            <h3>{{ day }}</h3>
            <div v-if="groupedActivitiesByDay[day].length === 0">
              <p class="no-activity">Nenhuma atividade</p>
            </div>
            <div v-else>
              <div
                v-for="(activity, index) in groupedActivitiesByDay[day]"
                :key="activity.id || index"
                class="activity-card"
              >
                <p style="font-size: xx-large; margin-bottom: 10px">
                  {{ activity.activity }}
                </p>

                <button @click="editActivity(getGlobalIndex(activity))">
                  Editar
                </button>
                <button @click="removeActivity(getGlobalIndex(activity))">
                  Remover
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref } from "vue";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import {
  db,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "../services/firebaseconfig.js";
import axios from "axios";

const isLoading = ref(false);
const data = ref(null);
const error = ref(null);

export default {
  name: "Home",
  components: { Header, Footer },
  data() {
    return {
      isModalVisible: false,
      isEditing: false,
      editIndex: null,
      formSaved: false,
      formData: { activity: "", day: "Segunda-feira", time: "" },
      activities: [],
      maxCards: 15,
      daysOfWeek: [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
      ],
      previsaoDoDia: {},
    };
  },
  computed: {
    currentDate() {
      const today = new Date();
      return `${this.daysOfWeek[today.getDay()]}, ${today.toLocaleDateString(
        "pt-BR"
      )}`;
    },
    groupedActivitiesByDay() {
      const grouped = {};
      this.daysOfWeek.forEach((day) => (grouped[day] = []));
      this.activities.forEach((a) => grouped[a.day]?.push(a));
      for (const day in grouped) {
        grouped[day].sort((a, b) => a.time.localeCompare(b.time));
      }
      return grouped;
    },
  },
  methods: {
    openForm() {
      this.isModalVisible = true;
    },
    closeForm() {
      this.isModalVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.formData = { activity: "", day: "Segunda-feira", time: "" };
      this.isEditing = false;
      this.editIndex = null;
    },
    async handleSubmit() {
      if (!this.isEditing && this.activities.length >= this.maxCards) {
        alert("Você já atingiu o limite máximo de 15 atividades!");
        return;
      }

      const duplicate = this.activities.some(
        (a) =>
          a.day === this.formData.day &&
          a.time === this.formData.time &&
          a.activity === this.formData.activity
      );
      if (duplicate && !this.isEditing) {
        alert("Essa atividade já foi registrada para esse dia e horário.");
        return;
      }

      try {
        const newActivity = {
          activity: this.formData.activity,
          day: this.formData.day,
          time: this.formData.time,
        };

        if (this.isEditing && this.editIndex !== null) {
          const docRef = this.activities[this.editIndex].docRef;
          await updateDoc(docRef, newActivity);
          this.activities[this.editIndex] = {
            ...newActivity,
            docRef,
            id: this.activities[this.editIndex].id,
          };
        } else {
          const docRef = await addDoc(
            collection(db, "activities"),
            newActivity
          );
          this.activities.push({ ...newActivity, docRef, id: docRef.id });
        }

        this.formSaved = true;
        setTimeout(() => (this.formSaved = false), 3000);
        this.closeForm();
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro ao adicionar a atividade. Tente novamente.");
      }
    },
    async editActivity(index) {
      try {
        const activity = this.activities[index];
        this.formData = {
          activity: activity.activity,
          day: activity.day,
          time: activity.time,
        };
        this.isEditing = true;
        this.editIndex = index;
        this.openForm();
      } catch (error) {
        console.error("Erro ao editar atividade:", error);
      }
    },
    async removeActivity(index) {
      try {
        await deleteDoc(this.activities[index].docRef);
        this.activities.splice(index, 1);
      } catch (error) {
        console.error("Erro ao remover atividade:", error);
      }
    },
    getGlobalIndex(activity) {
      return this.activities.findIndex((a) => a.id === activity.id);
    },
    formatDate(day) {
      const today = new Date();
      const target = new Date(today);
      const targetDay = this.daysOfWeek.indexOf(day);
      const diff = (targetDay - today.getDay() + 7) % 7;
      target.setDate(today.getDate() + diff);
      return target.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });
    },
    handleEsc(e) {
      if (e.key === "Escape") this.closeForm();
    },
    getPeriodOfDay(time) {
      const [hour] = time.split(":").map(Number);
      if (hour >= 0 && hour < 6) return "Madrugada";
      if (hour >= 6 && hour < 12) return "Manhã";
      if (hour >= 12 && hour < 18) return "Tarde";
      return "Noite";
    },
    async getData() {
      isLoading.value = true;

      const lat = localStorage.getItem("userLatitude");
      const lon = localStorage.getItem("userLongitude");
      const res = await axios.get(
        `https://api-tj65aqhppa-uc.a.run.app/api/weatherdata?lat=${lat}&lon=${lon}`
      );

      const previsaoDoDia = {};
      for (let index = 0; index < this.daysOfWeek.length; index++) {
        const day = this.daysOfWeek[index];
        const date = this.diasSemana[day];

        const weather = res.data.forecast.find((item) => item.date === date);

        if(weather) {
          previsaoDoDia[day] = {
            ...weather,
            recommendation: this.validarCondicoesClima(weather),
          };
        }
      }

      this.previsaoDoDia = previsaoDoDia;

      isLoading.value = false;
    },
    validarCondicoesClima(previsaoHoje) {
      if (!previsaoHoje) {
        return "Previsão para hoje não encontrada.";
      }
      const { max, humidity, rain_probability, condition } = previsaoHoje;

      const climaAdequado =
        rain_probability <= 30 &&
        max >= 15 &&
        max <= 30 &&
        humidity <= 80 &&
        !["rain", "storm"].includes(condition);

      return climaAdequado
        ? "Tempo adequado para exercícios ao ar livre."
        : "Tempo **não** adequado para exercícios ao ar livre.";
    },
    formatarSemana() {
      const { start_date: startDate } = this.obterInicioFimSemana();

      const diasSemana = {};

      for (let i = 0; i < 7; i++) {
        const dataAtual = new Date(startDate);
        dataAtual.setDate(startDate.getDate() + i);

        const diaSemana = dataAtual.toLocaleDateString("pt-br", {
          weekday: "long",
        });
        const dataFormatada = `${String(dataAtual.getDate()).padStart(
          2,
          "0"
        )}/${String(dataAtual.getMonth() + 1).padStart(2, "0")}`;

        const key = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
        diasSemana[key] = dataFormatada;
      }

      this.diasSemana = diasSemana;
    },
    obterInicioFimSemana() {
      const hoje = new Date();
      const dia = hoje.getDay();

      const diffDomingo = hoje.getDate() - dia;
      const startDate = new Date(hoje);
      startDate.setDate(diffDomingo);
      startDate.setHours(0, 0, 0, 0);
      startDate.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });

      const diffSabado = 6 - dia;
      const endDate = new Date(hoje);
      endDate.setDate(hoje.getDate() + diffSabado);
      startDate.setHours(0, 0, 0, 0);
      endDate.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });

      return {
        start_date: startDate,
        end_date: endDate,
      };
    },
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, "activities"));
      this.activities = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        docRef: doc.ref,
        id: doc.id,
      }));
      document.addEventListener("keydown", this.handleEsc);

      this.formatarSemana();
      this.getData();
    } catch (error) {
      console.error("Erro ao carregar atividades:", error);
    }
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleEsc);
  },
};
</script>

<style scoped>
@import "../assets/styles/home.css";
</style>
