import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Ws from './plugins/ws'

createApp(App)
  .use(Ws, {
    url: 'ws://localhost:3000'
  })
  .mount('#app')
