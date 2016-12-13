const Home = resolve => {
	require.ensure(['./views/home.vue'], () => {
		resolve(require('./views/home.vue'));
	});
};

const List = resolve => {
	require.ensure(['./views/list.vue'], () => {
		resolve(require('./views/list.vue'));
	});
};

const routers = [{
	path: '/',
	name: 'home',
	component: Home
}, {
	path: '/list',
	name: 'list',
	component: List
}, {
	path: '*',
	component: Home
}]

export default routers;