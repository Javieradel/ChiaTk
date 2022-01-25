import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '/src/components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    component: HelloWorld,
    // children: [
    //   {
    //     path: '/',
    //     name: 'Home',
    //     component: HelloWorld
    //   },
      // NEW ROUTES
      //...routesOrganizations,
   // ]
  },
  // {
  //   path: '/error-page',
  //   name: 'error-page',
  //   component: ErrorPage
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   component: ErrorPage
  // }
]
const router = createRouter({
  history: createWebHashHistory(),
    routes
})
export default router
