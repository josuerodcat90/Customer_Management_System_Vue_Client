import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "calendar" */ '../views/Home.vue'),
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue'),
	},
	{
		path: '/patients',
		name: 'Patients',
		component: () => import(/* webpackChunkName: "patients" */ '../views/Patients.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
