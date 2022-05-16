import { createApp } from 'vue';
import { SanityBlocks } from 'sanity-blocks-vue-component';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import store from '../store.js'
import routes from '../routes.js';


const app_store = createStore(store);
const app_router = createRouter({
	routes: routes,
	history: createWebHistory()
})

createApp(App)
	.use(app_store)
	.use(app_router)
	.component('sanity-blocks', SanityBlocks)
	.mount('#app');