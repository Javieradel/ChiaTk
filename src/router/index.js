import { createRouter, createWebHashHistory } from 'vue-router'
import PublicView from '/src/components/layouts/PublicView.vue'
import Login from '/src/components/layouts/Login.vue'
const routes = [
  {
    path: '/',
    component: PublicView,
    name:'Home'
    // children: [
    //   {
    //     path: '/',
    //     name: 'Home',
    //     component: HelloWorld
    //   },
   // ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // children: [
    //   {
    //     path: '/',
    //     name: 'Home',
    //     component: HelloWorld
    //   },
   // ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
    routes
})
export default router
