import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue';
import register from '@/views/register.vue';
import article from '@/views/article.vue'
import category from '@/views/category.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component : App
    // },
    // {
    //   path: '/about',
    //   name: 'about'
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    // }
    {
      path:"/article",
      component:article
    },
    {
      path:"/category",
      component:category
    },
    {
      path:"/login",
      name:"login",
      component : login
    },
    {
      path:"/register",
      name:"register",
      component : register
    }

  ]
})

export default router
