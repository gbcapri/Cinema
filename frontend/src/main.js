import { createApp } from 'vue';  // Importa a função para criar a app
import App from './App.vue';  // O componente raiz
import router from './router';  // Se você estiver utilizando Vue Router
import axios from 'axios';  // Importando o Axios para usar globalmente

// Criação e inicialização da app Vue
const app = createApp(App);

app.config.globalProperties.$axios = axios;  // Configura o Axios globalmente, se necessário

app.use(router);  // Usa o roteador se necessário
app.mount('#app');  // Monta a aplicação no elemento #app
