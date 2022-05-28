import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import '@/assets/styles/tailwind.css'
import i18n from './i18n'
import store from './store'



createApp(App)
    .use(router)
    .use(i18n)
    .use(store)
    .mount('#app')
