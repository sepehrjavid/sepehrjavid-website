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
        },
        {
            path: '/skills',
            component: () => import('../views/Skills.vue')
        },
        {
            path: '/certificates',
            component: () => import('../views/Certificates.vue')
        },
        {
            path: '/publications',
            component: () => import('../views/Publications.vue')
        },
        {
            path: '/achievements',
            component: () => import('../views/Achievements.vue')
        }
    ]
})

export default router
