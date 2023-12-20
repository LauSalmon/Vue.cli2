import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path : "/",
        name : "pokemon-list",
        component : ()=> import ("./components/pokemonList.vue")
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;