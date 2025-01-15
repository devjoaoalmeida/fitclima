<template>
  <div>
    <Header />
    <main>
      <h1>Bem-vindo ao FitClima!</h1>

      <div>
        <!-- Botão de adicionar atividade -->
        <div class="add-icon" @click="openForm">+</div>

        <!-- Modal para adicionar ou editar atividade -->
        <div v-if="isModalVisible" class="overlay" @click.self="closeForm">
          <div class="form-container">
            <form @submit.prevent="handleSubmit">
              <h2>{{ isEditing ? 'Editar Atividade Física' : 'Adicionar Atividade Física' }}</h2>

              <label for="activity">Atividade Física:</label>
              <input
                type="text"
                id="activity"
                v-model="formData.activity"
                required
                placeholder="Ex: Corrida"
              />

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

        <!-- Lista de atividades -->
        <div class="activity-list">
          <div v-for="(activity, index) in activities" :key="activity.id" class="activity-card">
            <p><strong>Atividade:</strong> {{ activity.activity }}</p>
            <p><strong>Dia:</strong> {{ activity.day }}</p>
            <p><strong>Horário:</strong> {{ activity.time }}</p>
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
import { db, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from '../services/firebaseconfig.js'; // Ajuste o caminho conforme necessário

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
        activity: "", // Nome da atividade
        day: "segunda-feira", // Dia da semana
        time: "", // Horário
      },
      activities: [], // Lista de atividades
      maxCards: 15, // Limite máximo de cards
    };
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
        if (this.isEditing && this.editIndex !== null) {
          // Atualiza a atividade na lista local e no Firestore
          const docRef = this.activities[this.editIndex].docRef;
          await updateDoc(docRef, {
            activity: this.formData.activity,
            day: this.formData.day,
            time: this.formData.time,
          });
          this.activities[this.editIndex] = { ...this.formData, docRef };
        } else {
          // Adiciona uma nova atividade ao Firestore
          const docRef = await addDoc(collection(db, 'activities'), { ...this.formData });
          this.activities.push({ ...this.formData, docRef });
        }
        this.closeForm();
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
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
        this.activities.splice(index, 1); // Remove localmente
      } catch (error) {
        console.error("Erro ao remover atividade:", error);
      }
    },
  },
  async mounted() {
    try {
      const querySnapshot = await getDocs(collection(db, 'activities'));
      this.activities = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        docRef: doc.ref, // Referência ao documento para operações futuras
      }));
    } catch (error) {
      console.error("Erro ao carregar atividades:", error);
    }
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
  grid-template-columns: repeat(5, 1fr);
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
}

.activity-card button {
  margin-right: 10px;
  background-color: #234f7e;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
}
</style>
