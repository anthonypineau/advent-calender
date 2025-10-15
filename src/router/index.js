import { createRouter, createWebHashHistory } from 'vue-router'
import Calendar from '../views/Calendar.vue'
import Privacy from '../views/Privacy.vue'

const routes = [
  { path: '/', name: 'calendar', component: Calendar },
  { path: '/privacy', name: 'privacy', component: Privacy }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
