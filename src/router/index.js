import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login/index.vue'),
    },
    {
        path: '/main',
        name: 'layout',
        component: () => import('../components/Layout'),
        redirect: 'home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
            },
            {
                path: '/table/one',
                name: 'table.one',
                component: () => import(/* webpackChunkName: "table" */ '../views/Table'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
