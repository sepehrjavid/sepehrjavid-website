import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/experience',
            component: () => import('../views/Experience.vue')
        },
        {
            path: '/education',
            component: () => import('../views/Education.vue')
        }
    ]
})

export default router
