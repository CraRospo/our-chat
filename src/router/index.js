import { createRouter, createWebHashHistory } from 'vue-router'
import UserLogin from '@/views/UserLogin.vue'
import ChatMain from '@/views/ChatMain.vue'
import PrivateProtocal from '@/views/PrivateProtocal.vue'


const routes = [
  { path: '/', name: 'UserLogin', component: UserLogin },
  { path: '/main', name: 'ChatMain', component: ChatMain },
  { path: '/protocal', name: 'PrivateProtocal', component: PrivateProtocal },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
