<template>
  <!-- Div que envolve o formulário, provavelmente usada para criar uma sobreposição/modal -->
  <div class="overlay">
    <!-- Formulário que chama o método handleSubmit ao ser enviado -->
    <form class="form-container" @submit.prevent="handleSubmit">
      
      <!-- Campo de entrada para a atividade -->
      <label for="activity">Atividade:</label>
      <!-- v-model vincula a entrada ao estado localFormData.activity -->
      <input v-model="localFormData.activity" type="text" id="activity" required placeholder="Ex: Corrida" />

      <!-- Campo de seleção para o dia da semana -->
      <label for="day">Dia da Semana:</label>
      <!-- v-model vincula a seleção ao estado localFormData.day -->
      <select v-model="localFormData.day" id="day" required>
        <!-- Loop sobre o objeto daysOfWeek para gerar as opções -->
        <option v-for="(label, value) in daysOfWeek" :key="value" :value="value">
          {{ label }}
        </option>
      </select>

      <!-- Botões de ação para o formulário -->
      <div class="form-actions">
        <!-- Botão de salvar, que chama o método handleSubmit ao ser clicado -->
        <button type="submit">Salvar</button>
        <!-- Botão de cancelar, que chama o método handleCancel ao ser clicado -->
        <button @click="handleCancel" type="button">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // Nome do componente
  name: 'ActivityForm',

  // Definição das props que o componente espera receber
  props: {
    formData: {
      // Espera um objeto como valor
      type: Object,
      required: true, // A prop é obrigatória
    },
    isEditing: {
      // Espera um valor booleano para saber se é edição ou criação
      type: Boolean,
      required: true,
    }
  },

  // Atributos locais do componente
  data() {
    return {
      // Armazenando os dados do formulário em localFormData
      localFormData: {
        activity: this.formData.activity, // A atividade inicial vem de formData
        day: this.formData.day           // O dia inicial vem de formData
      },
      // Objeto com os dias da semana para preencher o campo select
      daysOfWeek: {
        "Domingo": "Domingo",
        "Segunda-feira": "Segunda-feira",
        "Terça-feira": "Terça-feira",
        "Quarta-feira": "Quarta-feira",
        "Quinta-feira": "Quinta-feira",
        "Sexta-feira": "Sexta-feira",
        "Sábado": "Sábado"
      }
    };
  },

  // Watchers observando mudanças nas props
  watch: {
    // Quando formData mudar, atualizar localFormData
    formData: {
      immediate: true,  // Executa imediatamente quando o componente é montado
      deep: true,       // Observa mudanças profundas dentro do objeto formData
      handler(newVal) { // Função que será chamada quando formData mudar
        this.localFormData = { ...newVal }; // Atualiza localFormData com os novos valores
      }
    }
  },

  // Métodos para manipular ações no componente
  methods: {
    // Método chamado ao enviar o formulário
    handleSubmit() {
      // Verifica se os campos de atividade e dia estão preenchidos
      if (!this.localFormData.activity || !this.localFormData.day) {
        alert("Preencha todos os campos."); // Exibe um alerta caso algum campo esteja vazio
        return; // Encerra a execução do método
      }
      // Emite um evento 'submit' para o componente pai com os dados preenchidos
      this.$emit("submit", this.localFormData);
    },

    // Método chamado ao clicar no botão de cancelar
    handleCancel() {
      // Emite um evento 'cancel' para o componente pai indicando o cancelamento
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
/* Importação do arquivo CSS com estilos específicos para o componente */
@import "../assets/styles/home.css";
</style>
