import { createApp } from 'vue';
import App from './App.vue';
import activeUsers from './components/activeUsers'; 
import userData from './components/userData';
// createApp(App).mount('#app')
//On peut aussi stocker l'appli dans une variable
const app = createApp(App);
app.component('active-users',activeUsers);
app.component('user-data', userData);
app.mount('#app');

