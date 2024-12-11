import { createWebHashHistory, createRouter } from 'vue-router'

// This method is ok after build:
// import HomeView from '@/views/Home.vue'
// import AboutView from '@/views/About.vue'
// const routes = [
//   { path: '/', component: HomeView },
//   { path: '/about', component: AboutView }
// ]

// This method is not ok after build: (async router, to improve the performance)
const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/about', component: () => import('@/views/About.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
