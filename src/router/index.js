import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login'),
    },
    {
        path: '/',
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
            {
                path: 'table/page',
                name: 'table.page',
                component: () => import(/* webpackChunkName: "tablepage" */ '../views/TablePage'),
            },
            {
                path: 'form',
                name: 'form',
                component: () => import(/* webpackChunkName: "form" */ '../views/Form'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
