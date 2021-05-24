import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login'),
    },
    {
        path: '/main',
        name: 'layout',
        component: () => import(/* webpackChunkName: "layout" */ '../components/Layout'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
            },
            {
                path: 'table/one',
                name: 'table.one',
                component: () => import(/* webpackChunkName: "table" */ '../views/Table'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
