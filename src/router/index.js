// 路由vue-router版本不能过高 可以为3.2.0
// 配置路由相关
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/home/Home.vue'
// import Category from '../views/category/Category.vue'
// import Cart from '../views/cart/Cart.vue'
// import Profile from '../views/profile/Profile.vue'
// 懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
// 1.通过Vue.use(插件)安装插件
Vue.use(VueRouter)
// 2.创建路由对象
const routes = [
  {
    // 重定向
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
]
const router = new VueRouter({
  routes,
  mode:'history'
})
// 3.将router对象传入到实例中
export default router