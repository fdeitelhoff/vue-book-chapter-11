import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import store from './store';

createApp(App).use(createPinia()).use(store).mount('#app');
