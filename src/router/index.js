import { createRouter, createWebHashHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Privacy from '../views/Privacy.vue'

const routes = [
  { path: '/', name: 'Kalender', component: Calendar },
  { path: '/privacy', name: 'Impressum', component: Privacy }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
