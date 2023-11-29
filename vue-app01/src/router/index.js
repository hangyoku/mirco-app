import Home from '../views/Home.vue'
import Goods from '../views/Goods/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods
  }
]

export default routes

