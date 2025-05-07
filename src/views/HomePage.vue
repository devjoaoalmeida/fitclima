<template>
  <div>
    <Header />
    <main>
      <div>
        <h1>Bem-vindo ao FitClima!</h1>
      </div>

      <div class="add-section">
        <!-- Botão para abrir o formulário de adicionar ou editar atividade -->
        <div class="add-icon" @click="openForm" aria-label="Adicionar Atividade Física">+</div>

        <!-- Formulário de atividade (add/editar). Controlado pelo componente pai -->
        <ActivityForm v-if="isModalVisible" :formData="formData" :isEditing="isEditing" @submit="handleSubmit"
          @cancel="closeForm" />

        <!-- Lista de atividades organizadas por dia -->
        <div v-if="!isLoading" class="activity-list">
          <div v-for="day in orderedDaysOfWeek" :key="day">
            <p class="titulo">{{ day }} {{ diasSemana[day] }}</p>

            <!-- Mostra a previsão do tempo para o dia -->
            <WeatherInfo :day="day" :previsao="previsaoDoDia[day]" />

            <!-- Lista atividades do dia. Eventos edit/remove emitidos para o pai -->
            <ActivityList :activities="groupedActivitiesByDay[day]" @edit="editActivity" @remove="removeActivity" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ActivityForm from "../components/ActivityForm.vue";
import WeatherInfo from "../components/WeatherInfo.vue";
import ActivityList from "../components/ActivityList.vue";
import {
  db,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  getAuth,
  onAuthStateChanged,
} from "../services/firebaseconfig.js";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    ActivityForm,
    WeatherInfo,
    ActivityList,
  },
  data() {
    return {
      userId: null,
      isModalVisible: false, // controla visibilidade do formulário
      isEditing: false,      // modo edição
      editIndex: null,       // índice da atividade sendo editada
      formData: { activity: "", day: "Domingo" }, // dados do formulário
      activities: [],        // lista de atividades
      isLoading: false,
      previsaoDoDia: {},     // previsões organizadas por dia
      diasSemana: {},        // mapeamento nomeDia -> data (ex: Segunda -> 06/05)
      orderedDaysOfWeek: [], // dias da semana a partir de hoje
      daysOfWeek: [ // ordem padrão dos dias
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado",
      ],
    };
  },
  computed: {
    // Agrupa atividades por dia da semana e ordena por horário
    groupedActivitiesByDay() {
      const grouped = {};
      this.daysOfWeek.forEach((day) => (grouped[day] = []));
      this.activities.forEach((a) => grouped[a.day]?.push(a));
      return grouped;
    },
  },
  methods: {
    // Busca previsão do tempo via API externa
    async getWeatherData() {
      this.isLoading = true;
      const lat = localStorage.getItem("userLatitude");
      const lon = localStorage.getItem("userLongitude");
      try {
        const res = await axios.get(
          `https://api-tj65aqhppa-uc.a.run.app/api/weatherdata?lat=${lat}&lon=${lon}`
        );
        this.processWeatherData(res.data.forecast);
      } catch (error) {
        console.error("Erro ao obter previsão do tempo:", error);
      } finally {
        this.isLoading = false;
      }
    },

    // Processa e organiza previsões por dia da semana
    processWeatherData(forecast) {
      const previsaoDoDiaData = {};
      this.daysOfWeek.forEach((day) => {
        const date = this.diasSemana[day];
        const weather = forecast.find((item) => item.date === date);
        previsaoDoDiaData[day] = weather
          ? { ...weather, recommendation: this.validarCondicoesClima(weather) }
          : { recommendation: "Previsão não disponível." };
      });
      this.previsaoDoDia = previsaoDoDiaData;
    },

    // Define se o clima é adequado para exercício
    validarCondicoesClima(previsaoHoje) {
      if (!previsaoHoje) return "Previsão para hoje não encontrada.";
      const { max, humidity, rain_probability, condition } = previsaoHoje;
      const climaAdequado =
        rain_probability <= 30 &&
        max >= 15 &&
        max <= 30 &&
        humidity <= 80 &&
        !["rain", "storm"].includes(condition);
      return climaAdequado
        ? "Tempo adequado para exercícios ao ar livre."
        : "Tempo não adequado para exercícios ao ar livre.";
    },

    // Monta a semana com as datas correspondentes
    formatarSemana() {
      const hoje = new Date();
      const diasSemanaData = {};
      this.daysOfWeek.forEach((day, index) => {
        const data = new Date(hoje);
        data.setDate(hoje.getDate() + ((index - hoje.getDay() + 7) % 7));
        diasSemanaData[day] = `${String(data.getDate()).padStart(2, "0")}/${String(
          data.getMonth() + 1
        ).padStart(2, "0")}`;
      });
      this.diasSemana = diasSemanaData;
    },

    // Reordena os dias para começar a semana de hoje
    ordenarDiasAPartirDeHoje() {
      const hoje = new Date();
      const diaHoje = hoje.getDay();
      this.orderedDaysOfWeek = [
        ...this.daysOfWeek.slice(diaHoje),
        ...this.daysOfWeek.slice(0, diaHoje),
      ];
    },

    // SUBMETER NOVA ATIVIDADE ou EDITAR EXISTENTE
    async handleSubmit(data) {
      const auth = getAuth();
      const user = auth.currentUser; // Garantindo que o usuário está autenticado
      if (!user) {
        alert("Você precisa estar logado para adicionar atividades.");
        this.$router.push("/login"); // redireciona para o login se necessário
        return;
      }

      this.userId = user.uid; // Garantir que userId é atribuído corretamente

      // Verificar limite de atividades
      if (!this.isEditing && this.activities.length >= 15) {
        alert("Você já atingiu o limite máximo de 15 atividades!");
        return;
      }

      const duplicate = this.activities.some(
        (a) => a.day === data.day && a.activity === data.activity
      );
      if (duplicate && !this.isEditing) {
        alert("Essa atividade já foi registrada para esse dia e horário.");
        return;
      }

      const atividadesDoDia = this.activities.filter(
        (a) => a.day === data.day && a.userId === this.userId
      );

      if (!this.isEditing && atividadesDoDia.length >= 3) {
        alert("Você já adicionou o limite de 3 atividades para esse dia.");
        return;
      }

      const newActivity = {
        activity: data.activity,
        day: data.day,
        userId: this.userId, // Garantindo que o userId seja passado corretamente
      };

      try {
        if (this.isEditing && this.editIndex !== null) {
          const docRef = this.activities[this.editIndex].docRef;
          await updateDoc(docRef, newActivity);
          this.activities[this.editIndex] = {
            ...newActivity,
            docRef,
            id: this.activities[this.editIndex].id,
          };
        } else {
          const docRef = await addDoc(collection(db, "activities"), newActivity);
          this.activities.push({ ...newActivity, docRef, id: docRef.id });
        }

        this.closeForm();
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
        alert("Erro ao adicionar a atividade. Tente novamente.");
      }
    },


    // INICIAR EDIÇÃO DE UMA ATIVIDADE
    editActivity(id) {
      const index = this.activities.findIndex((a) => a.id === id);
      if (index !== -1) {
        const activity = this.activities[index];
        this.formData = { activity: activity.activity, day: activity.day };
        this.isEditing = true;
        this.editIndex = index;
        this.openForm();
      }
    },

    // REMOVER ATIVIDADE DO FIREBASE
    async removeActivity(id) {
      const index = this.activities.findIndex((a) => a.id === id);
      if (index !== -1) {
        try {
          await deleteDoc(this.activities[index].docRef);
          this.activities.splice(index, 1);
        } catch (error) {
          console.error("Erro ao remover atividade:", error);
        }
      }
    },

    // ABRIR E FECHAR FORMULÁRIO
    openForm() {
      this.isModalVisible = true;
    },
    closeForm() {
      this.isModalVisible = false;
      this.formData = { activity: "", day: "Segunda-feira" };
      this.isEditing = false;
      this.editIndex = null;
    },
  },

  // CARREGAMENTO INICIAL DAS ATIVIDADES E DA PREVISÃO
  async mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        this.$router.push("/");
        return;
      }

      this.userId = user.uid;

      try {
        const querySnapshot = await getDocs(collection(db, "activities"));
        this.activities = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), docRef: doc.ref, id: doc.id }))
          .filter((activity) => activity.userId === this.userId); // Filtra só do usuário
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }

      this.ordenarDiasAPartirDeHoje();
      this.formatarSemana();
      await this.getWeatherData();
    });
  }
};
</script>

<style scoped>
@import "../assets/styles/home.css";
</style>