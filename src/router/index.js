import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Contact from '../views/Contact.vue'
import ContactTest from '../views/ContactTest'
import MyLife from '../views/MyLife'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/contacttest',
    name: 'ContactTest',
    component: ContactTest
  },
  {
    path: '/mylife',
    name: 'MyLife',
    component: MyLife
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
