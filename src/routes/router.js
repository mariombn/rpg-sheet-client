import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home.vue';
import Sobre from '@/pages/Sobre.vue';

const routes = [
    { path: '/', component:Home },
    { path: '/sobre', component:Sobre }
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;