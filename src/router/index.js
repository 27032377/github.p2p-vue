import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

const Home = resolve => require(['@/pages/Home.vue'], resolve)
const My = resolve => require(['@/pages/My.vue'], resolve)
const FirstIn = resolve => require(['@/pages/FirstIn.vue'], resolve)
const MiddlewarePage = resolve => require(['@/pages/MiddlewarePage.vue'], resolve)
const Login = resolve => require(['@/pages/Login.vue'], resolve)

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'MiddlewarePage',
    component: MiddlewarePage
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    }
  },
  {
    path: '/My',
    name: 'My',
    component: My,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/FirstIn',
    name: 'FirstIn',
    component: FirstIn,
    meta: {
      title: '欢迎您'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  }
]
const router = new Router({
  mode: 'history',
  base: '/',
  routes
})
router.beforeEach((to, from, next) => {
  store.dispatch({
    type: 'CHANGE_LOADING',
    bol: true
  })
  next()
})
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'P2P'
  }
  store.dispatch({
    type: 'CHANGE_LOADING',
    bol: false
  })
})

export default router
