import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import '@/api/interceptor';

const app = createApp(App);

app.mount('#app');
