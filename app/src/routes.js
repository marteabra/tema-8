import Home from './views/Home.vue';
import Projects from './views/Project.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'project', path: '/:projectSlug', component: Projects }
];
