<template>
  <footer>
    <p>&copy; 2025 João Pedro de Almeida. Todos os direitos reservados.</p>
  </footer>
</template>
  
<script>
  export default {
    name: 'Footer'
  }
</script>
  
<style scoped>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    z-index: 1000;
  }
</style>
  