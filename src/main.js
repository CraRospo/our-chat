import { createApp } from 'vue'
import './style.css'
import Ws from './plugins/ws'
import App from './App.vue'
import router from './router/'

createApp(App)
  .use(Ws)
  .use(router)
  .mount('#app')
