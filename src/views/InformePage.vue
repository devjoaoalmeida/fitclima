<template>
  <div>
    <Header />

    <main>
      <h1>Informe-se</h1>
      <p>Informações sobre Sedentarismo e Atividade Física.</p>
        <section class="articles-container">
            <div class="article-block">
                <a href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf" target="_blank">
                    <img src="../assets/article1.jpg" alt="Guia Atividade Física">
                </a>
                <h2>Guia de Atividade Física</h2>
            </div>
            <div class="article-block">
                <a href="https://iris.who.int/bitstream/handle/10665/363607/9789240059153-eng.pdf?sequence=1" target="_blank">
                    <img src="../assets/article2.jpg" alt="Relatório OMS">
                </a>
                <h2>Relatório da OMS</h2>
            </div>
            <div class="article-block">
                <a href="#" onclick="alert('TCC ainda em desenvolvimento. Aguarde!'); return false;">
                    <img src="../assets/article3.jpg" alt="TCC Em Desenvolvimento">
                </a>
                <h2>TCC - FitClima</h2>
            </div>
        </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  },
};
</script>

<style scoped>
@import "../assets/styles/main.css";
</style>
