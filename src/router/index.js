import Vue from 'vue'
import Router from 'vue-router'
import appMain from '@/components/app-main'
import pageContainer from '@/pages/pageContainer.vue'
import page from '@/pages/page.vue'
import pageDetail from '@/pages/pageDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages'
    },
    {
      path: '/',
      name: 'appMain',
      component: appMain,
      children: [
        {
          path: '/pages',
          component: pageContainer,
          name: 'pages',
          children: [
            {
              path: '',
              name: 'page',
              component: page
            }, {
              path: 'pageDetail',
              name: 'pageDetail',
              component: pageDetail
            }
          ]
        }
      ]
    }
  ]
})
