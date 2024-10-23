import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      beforeEnter: () => {
        window.location.replace("/index.html")
      }
    },
    {
      component: MainLayout,
      children: [
        {
          path: '/numberList',
          name: 'Number List',
          component: () => import('../views/NumberListView.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/packageList',
          name: 'Package List',
          component: () => import('../views/PackageListView.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/transactionSummary',
          name: 'Transaction Summary',
          component: () => import('../views/TransactionSummaryView.vue'),
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
     fetch("/api/test?" + new URLSearchParams({token: 'asd'}).toString(), {
      method: "GET", redirect: 'follow'
    })
    .then(res => {
      if (res.redirected) {
        window.location.replace(res.url)
      } else {
        next()
      }
    }).catch(err => {
      console.error(err)
      window.alert("Something went wrong.")
    })
  } else {
    next()
  }
})

export default router
