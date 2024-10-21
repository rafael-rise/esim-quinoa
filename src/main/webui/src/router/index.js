import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../components/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    {
      component: MainLayout,
      children: [
        {
          path: '/numberList',
          name: 'Number List',
          component: () => import('../views/NumberListView.vue')
        },
        {
          path: '/packageList',
          name: 'Package List',
          component: () => import('../views/PackageListView.vue')
        },
        {
          path: '/transactionSummary',
          name: 'Transaction Summary',
          component: () => import('../views/TransactionSummaryView.vue')
        }
      ]
    }
  ]
})

export default router
