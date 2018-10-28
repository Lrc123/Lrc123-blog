import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome.vue'
import blogAudio from '@/components/items/blogAudio.vue'
import blogContext from '@/components/pages/blogContext.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/blog/audio',
      name: 'audio',
      component: blogAudio
    },
    {
      path: '/blog/context',
      name: 'context',
      component: blogContext
    }
  ]
})
