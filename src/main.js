import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Ws from './plugins/ws'
import router from './router/'

createApp(App)
  .use(Ws, {
    url: 'ws://localhost:8010'
  })
  .use(router)
  .mount('#app')
