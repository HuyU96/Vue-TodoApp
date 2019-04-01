import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loadView = (view) => {
  return () => import(`@/views/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    },
    {
      path: '/',
      name: 'home',
      component: loadView('Home')
    }
  ]
})
