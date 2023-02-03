import { createRouter, createWebHashHistory } from 'vue-router'
import UserLogin from '@/views/UserLogin.vue'
import ChatMain from '@/views/ChatMain.vue'
import PrivateProtocal from '@/views/PrivateProtocal.vue'
import App from '@/App.vue'

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'App',
    component: App,
    children: [
      { path: 'login', name: 'UserLogin', component: UserLogin },
      { path: 'protocal', name: 'PrivateProtocal', component: PrivateProtocal },
      { path: 'main', name: 'ChatMain', component: ChatMain }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
