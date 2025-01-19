<template>
  <div>
    <Header />

    <main>
      <div class="login-container">
        <div class="login-box">
          <h2>Entrar no seu perfil</h2>
          
          <form @submit.prevent="handleLogin">
            <label for="email">Email:</label>
            <input type="email" v-model="email" id="email" required>

            <label for="password">Senha:</label>
            <input type="password" v-model="password" id="password" required>
            <div class="forgot-password">
              <a @click="handlePasswordReset">Esqueci minha senha</a>
            </div>
            <button type="submit">Entrar</button>
          </form>

          <div class="login-text">
            <div class="google-login">
              <p>Ou entre com o Google</p>
              <img src="/src/assets/web_neutral_rd_na@1x.png" @click="loginWithGoogle" class="google-login-button">
            </div>

            <div class="register-button">
              <p>Não tem conta? </p>
              <router-link to="/register">Cadastre-se</router-link>
            </div>
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
import { auth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, googleProvider  } from '../services/firebaseconfig.js';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard'); 
      } catch (error) {
        alert('Erro ao fazer login: ' + error.message);
      }
    },
    async loginWithGoogle() {
      try {
        await signInWithPopup(auth, googleProvider);
        this.$router.push('/dashboard');
      } catch (error) {
        alert('Erro ao fazer login com Google: ' + error.message);
      }
    },
    async handlePasswordReset() {
      try {
        const email = this.email; // Pega o email do input
        if (email) {
          await sendPasswordResetEmail(auth, email);
          alert("E-mail para redefinição de senha enviado com sucesso!");
        } else {
          alert("Endereço de e-mail não encontrado!");
          alert("Digite o e-mail no local indicado e clique novamente em Esqueci minha senha")
        }
      } catch (error) {
        console.error("Erro ao enviar e-mail de redefinição de senha:", error);
        alert(`Erro ao enviar e-mail: ${error.message}`);
      }
    }
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
@import "../assets/styles/login.css";
</style>
