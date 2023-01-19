import { createRouter, createWebHashHistory } from 'vue-router'
import UserLogin from '@/views/UserLogin.vue'
import ChatMain from '@/views/ChatMain.vue'

const routes = [
  { path: '/', component: UserLogin },
  { path: '/main', component: ChatMain },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
