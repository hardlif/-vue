import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue';
import register from '@/views/register.vue'
import article from '@/views/article.vue'
import category from '@/views/category.vue'
import home from '@/home.vue'
import articleContent from '@/views/articleContent.vue'
import markdown from "@/components/markdown/markdownEditor.vue"
import articleShow from '@/views/articleShow.vue'
import test from '@/views/test.vue'
import test2 from '@/views/test2.vue'
import test3 from '@/views/test/testScopeStyle.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component : home,
      children : [
        {
          path:"/article",
          component:article
        },
        {
          path:"/category",
          component:category
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about'
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    // }
   
    {
      path:"/login",
      name:"login",
      component : login
    },
    {
      path:"/register",
      name:"register",
      component : register
    },
    {
      path:"/articleContent",
      component : articleContent
    },
    {
      path:"/markdown",
      component : markdown
    },
    {
      path:"/article/:id",
      props:true,
      component : articleShow
    },
    {
      path:"/test",
      component : test
    },
    {
      path:"/test2",
      component : test2
    },{
      path:"/testScope",
      component : test3
    }

  ]
})

export default router
