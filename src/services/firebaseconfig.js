// Importação dos módulos do Firebase
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { 
  getFirestore, 
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBpVjMEwPBtbmlw3W5NEgZgs4LKztYQbpA",
  authDomain: "fitclima-tcc.firebaseapp.com",
  databaseURL: "https://fitclima-tcc-default-rtdb.firebaseio.com",
  projectId: "fitclima-tcc",
  storageBucket: "fitclima-tcc.firebasestorage.app",
  messagingSenderId: "117549519794",
  appId: "1:117549519794:web:e81922423b331440a24aab"
};

// Inicializar o app Firebase
const app = initializeApp(firebaseConfig);

// Inicializar serviços do Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);

// Configura o provedor de autenticação do Google
const googleProvider = new GoogleAuthProvider();

// Exportar os serviços para uso nos componentes
export {
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
};
