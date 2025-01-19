<template>
  <div>
    <Header />
    <main>
      <div class="login-container">
        <div class="login-box">
          <h2>Cadastre-se</h2>
          <form @submit.prevent="handleRegister">

            <label for="name">Nome:</label>
            <input type="text" v-model="nome" id="name" @input="validateName" required/>
            <small v-if="nameError" class="error-message">{{ nameError }}</small>

            <label for="email">Email:</label>
            <input type="email" v-model="email" id="email" @input="validateEmail" required/>
            <small v-if="emailError" class="error-message">{{ emailError }}</small>

            <label for="password">Senha:</label>
            <input type="password" v-model="password" id="password" @input="validatePassword" required/>
            <ul class="password-checklist">
              <li :class="{ valid: passwordCriteria.length }">Mínimo de 8 caracteres</li>
              <li :class="{ valid: passwordCriteria.uppercase }">Uma letra maiúscula</li>
              <li :class="{ valid: passwordCriteria.lowercase }">Uma letra minúscula</li>
              <li :class="{ valid: passwordCriteria.number }">Um número</li>
              <li :class="{ valid: passwordCriteria.special }">Um caractere especial</li>
            </ul>

            <label for="confirmPassword">Confirmar Senha:</label>
            <input type="password" v-model="confirmPassword" id="confirmPassword" @input="validateConfirmPassword" required/>
            <small class="confirmation-message" :class="{ valid: confirmPasswordValid, error: !confirmPasswordValid }">
              {{ confirmPasswordMessage }}
            </small>

            <button type="submit" :disabled="!isFormValid">Cadastrar</button>
          </form>
          <div class="register-text">
            <p>Já tem conta?</p>
            <router-link to="/login">Entre aqui</router-link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { auth, db, doc, createUserWithEmailAndPassword, setDoc } from "../services/firebaseconfig.js";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Register",
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();

    const nome = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const confirmPasswordValid = ref(false);
    const confirmPasswordMessage = ref("");
    const nameError = ref("");
    const emailError = ref("");
    const passwordCriteria = ref({
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      special: false,
    });

    const isFormValid = computed(() => {
      return (
        nome.value &&
        email.value &&
        !nameError.value &&
        !emailError.value &&
        Object.values(passwordCriteria.value).every((criterion) => criterion) &&
        confirmPasswordValid.value
      );
    });

    const validateName = () => {
      if (!nome.value.trim()) {
        nameError.value = "O nome não pode estar vazio.";
      } else {
        nameError.value = "";
      }
    };

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        emailError.value = "Por favor, insira um email válido.";
      } else {
        emailError.value = "";
      }
    };

    const validatePassword = () => {
      passwordCriteria.value.length = password.value.length >= 8;
      passwordCriteria.value.uppercase = /[A-Z]/.test(password.value);
      passwordCriteria.value.lowercase = /[a-z]/.test(password.value);
      passwordCriteria.value.number = /\d/.test(password.value);
      passwordCriteria.value.special = /[@$!%*?&]/.test(password.value);
    };

    const validateConfirmPassword = () => {
      if (password.value === confirmPassword.value) {
        confirmPasswordValid.value = true;
        confirmPasswordMessage.value = "As senhas coincidem!";
      } else {
        confirmPasswordValid.value = false;
        confirmPasswordMessage.value = "As senhas não coincidem.";
      }
    };

    const handleRegister = async () => {
      if (isFormValid.value) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
          );
          const user = userCredential.user;

          await setDoc(doc(db, "users", user.uid), {
            nome: nome.value,
            email: email.value,
          });

          alert(`Bem-vindo, ${nome.value}!`);
          router.push("/dashboard");
        } catch (error) {
          console.error("Erro ao cadastrar:", error.message);
          alert("Erro ao cadastrar. Tente novamente.");
        }
      }
    };

    return {
      nome,
      email,
      password,
      confirmPassword,
      confirmPasswordValid,
      confirmPasswordMessage,
      nameError,
      emailError,
      passwordCriteria,
      isFormValid,
      validateName,
      validateEmail,
      validatePassword,
      validateConfirmPassword,
      handleRegister,
    };
  },
};
</script>

<style scoped>
@import "../assets/styles/login.css";
</style>
