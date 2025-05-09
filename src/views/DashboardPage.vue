<template>
  <div>
    <Header />
    <main>
      <div class="dashboard-container">
        <h1>Bem-vindo ao seu perfil!</h1>

        <div class="user-info">
          <h2>Informações do Perfil</h2>

          <p><strong>Nome:</strong> {{ userInfo?.nome || user?.displayName }}</p>
          <p><strong>Email:</strong> {{ user?.email }}</p>

          <div v-if="isEditing && !isGoogleUser">
            <input type="text" v-model="editName" placeholder="Editar nome" />
            <div class="button-editing-name">
              <button @click="updateProfile">Salvar</button>
              <button @click="cancelEdit">Cancelar</button>
            </div>
          </div>
          <div v-else class="edit-name">
            <button v-if="!isGoogleUser" @click="editProfile">Editar Nome</button>
          </div>
        </div>

        <div class="password-reset-section">
          <button v-if="!isGoogleUser" @click="sendPasswordReset">Enviar e-mail de Redefinição de Senha</button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { auth, db, doc, updateDoc, getDoc, sendPasswordResetEmail } from '../services/firebaseconfig.js';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      user: null,
      userInfo: null, 
      editName: '',
      editEmail: '',
      isEditing: false,
      isGoogleUser: false,
    };
  },
  methods: {
    async fetchUserInfo() {
      try {
        console.log("Fetching user info...");
        
        if (!this.user) {
          console.warn("Usuário não autenticado corretamente.");
          return;
        }

        if (this.isGoogleUser) {
          this.userInfo = {
            nome: this.user.displayName,
            email: this.user.email,
          };
        } else {
          const userDoc = doc(db, "users", this.user.uid);
          const userSnap = await getDoc(userDoc);

          if (userSnap.exists()) {
            this.userInfo = userSnap.data();
          } else {
            console.warn("Dados do usuário não encontrados!");
            this.userInfo = null; 
          }
        }
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
        alert("Ocorreu um erro ao carregar seus dados. Por favor, tente novamente.");
      }
    },
    editProfile() {
      this.editName = this.userInfo?.nome || this.user?.displayName || '';
      this.editEmail = this.user?.email || '';
      this.isEditing = true;
    },
    cancelEdit() {
      this.isEditing = false;
      this.editName = '';
      this.editEmail = '';
    },
    async updateProfile() {
      try {
        if (this.editName !== this.userInfo?.nome) {
          const userDoc = doc(db, "users", this.user.uid);
          await updateDoc(userDoc, { nome: this.editName });
          
          alert("Perfil atualizado com sucesso!");
          this.isEditing = false;
          this.fetchUserInfo();
        } else {
          alert("Não há alteração no nome.");
        }
      } catch (error) {
        console.error("Erro ao atualizar perfil:", error);
        alert("Erro ao atualizar perfil. Tente novamente.");
      }
    },

    async sendPasswordReset() {
      try {
        const email = this.user?.email; 
        if (email) {
          await sendPasswordResetEmail(auth, email);
          alert("E-mail para redefinição de senha enviado com sucesso!");
        } else {
          alert("Endereço de e-mail não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao enviar e-mail de redefinição de senha:", error);
        alert(`Erro ao enviar e-mail: ${error.message}`);
      }
    },

    async handleGoogleSignIn(userCredential) {
      if (userCredential && userCredential.user) {
        const user = userCredential.user;
        if (user.displayName) {
          this.editName = user.displayName;
        } else {
          console.warn("Nome do Google não encontrado, verificando informações...");
        }
        this.isGoogleUser = true; 
        await this.fetchUserInfo(); 
      }
    }
  },
  async created() {
    this.user = auth.currentUser;

    if (this.user) {
      if (this.user.providerData[0]?.providerId === "google.com") {
        this.isGoogleUser = true;
        if (this.user.displayName) {
          this.editName = this.user.displayName;
        }
      }
      await this.fetchUserInfo();
    } else {
      this.$router.push('/login');
    }

    auth.onAuthStateChanged(userCredential => {
      if (userCredential) {
        this.user = userCredential;
        this.handleGoogleSignIn(userCredential);
      }
    });
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
@import "../assets/styles/dashboard.css";
</style>
