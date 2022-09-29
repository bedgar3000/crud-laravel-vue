import { createRouter, createWebHistory } from 'vue-router';

import ProductIndex from '../components/products/Index.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
    {
        path: '/',
        component: ProductIndex
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
