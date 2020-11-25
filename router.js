import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./src/views/HomeView";
import BeerView from "./src/views/BeerView";
import BeersView from "./src/views/BeersView";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/beers/:id',
        component: BeerView
    },
    {
        path: '/beers/',
        component: BeersView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
