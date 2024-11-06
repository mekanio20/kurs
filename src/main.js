import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'video.js/dist/video-js.css';
import './style.css'

const app = createApp(App)

app.use(router)
app.mount('#app')