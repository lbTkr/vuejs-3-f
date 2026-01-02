import {createWebHistory, createRouter} from 'vue-router';
import TitleComp from '../components/Title.vue';
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';
import Detail from '../components/Detail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: TitleComp},
        {path: '/portfolio', component: Portfolio},
        {path: '/about', component: About},
        {path: '/detail/:id', component: Detail}
    ],
});

export default router;