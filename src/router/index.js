import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Top from '@/components/Top'
import Vote from '@/components/Vote'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello_world',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }, {
      path: '/',
      name: 'Top',
      component: Top
    }, {
      path: '/vote',
      name: 'Vote',
      component: Vote
    }
  ]
})
