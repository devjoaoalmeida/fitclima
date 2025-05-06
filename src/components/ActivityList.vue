<template>
  <!-- Contêiner principal que envolve todas as atividades -->
  <div>
    <!-- Loop v-for que percorre a lista de atividades e exibe cada uma delas -->
    <div v-for="(activity) in activities" :key="activity.id" class="activity-item">
      <!-- Exibe o nome da atividade -->
      <p>{{ activity.activity }}</p>
      
      <!-- Contêiner para os botões de ação (Editar e Remover) -->
      <div class="actions">
        <!-- Botão de editar que chama o método editActivity com o índice da atividade -->
        <button @click="editActivity(activity.id)">Editar</button>
        
        <!-- Botão de remover que chama o método removeActivity com o índice da atividade -->
        <button @click="removeActivity(activity.id)">Remover</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Nome do componente
  name: 'ActivityList',

  // Definição das props que o componente espera receber
  props: {
    // A prop 'activities' espera um array de atividades
    activities: {
      type: Array,
      required: true, // A prop é obrigatória
    }
  },

  methods: {
    // Método para disparar o evento de edição de uma atividade
    editActivity(id) {
      // Emite um evento 'edit' para o componente pai, passando o índice da atividade
      this.$emit('edit', id);
    },

    // Método para disparar o evento de remoção de uma atividade
    removeActivity(id) {
      // Emite um evento 'remove' para o componente pai, passando o índice da atividade
      this.$emit('remove', id);
    }
  }
};
</script>

<style scoped>
/* Importação do arquivo CSS com estilos específicos para o componente */
@import "../assets/styles/home.css";
</style>
