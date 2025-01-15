<template>
  <section v-if="isVisible" id="city-modal" class="overlay">
    <div class="modal-content">
      <h2>Informe seu CEP</h2>
      <input type="text" id="cep-input" v-model="cep" placeholder="Digite seu CEP" maxlength="8" @input="onCepInput">
      <button @click="saveCity" id="save-city">Salvar</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CityModal',
  data() {
    return {
      cep: '',  // Armazena o CEP que o usuário digitou
      isVisible: !this.getCityFromStorage(),  // Mostra o modal apenas se o CEP não foi salvo
    };
  },
  methods: {
    onCepInput() {
      this.cep = this.cep.replace(/(\d{5})(\d{3})/, '$1-$2');  // Formata o CEP automaticamente conforme a digitação
    },
    saveCity() {
      if (this.cep.trim()) {
        localStorage.setItem('userCep', this.cep);  // Armazena o CEP no localStorage
        this.$emit('update-cep', this.cep);  // Emite evento para o componente pai atualizar o CEP no header
        this.isVisible = false;  // Fecha o modal após salvar
      }
    },
    getCityFromStorage() {
      return localStorage.getItem('userCep');  // Retorna o CEP armazenado, ou undefined caso não tenha
    }
  }
};
</script>

<style scoped>
/* Adicione estilos para o citymodal */
.hidden {
  display: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Cor do fundo com opacidade */
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px); /* Aplicando o efeito de desfocagem */
  -webkit-backdrop-filter: blur(5px); /* Compatibilidade para navegadores webkit */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

#cep-input {
  width: 80%;
  padding: 8px;
  margin: 10px 0;
}

#save-city {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#save-city:hover {
  background-color: #45a049;
}
</style>
