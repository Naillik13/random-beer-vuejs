import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./src/views/HomeView";
import BeerView from "./src/views/BeerView";
import BeersView from "./src/views/BeersView";
import SearchView from "./src/views/SearchView";
import FavoritesView from "./src/views/FavoritesView";

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
    {
        path: '/search/',
        component: SearchView
    },
    {
        path: '/favorites/',
        component: FavoritesView
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
