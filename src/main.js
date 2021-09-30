import { createApp } from 'vue'
import App from './App.vue'
import './assets/animate.css'
import router from './router'
import store from './store'

const app = createApp(App);
app
    .use(router)
    .use(store)
    .mount('#app');

// Global error handler
app.config.errorHandler = (error) => {
    console.error('Global error: ', error.message);
    router.push({ name: 'error'});
}
