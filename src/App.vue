<template>
	<div id="app" style="margin-bottom: 50px;">
		<Header />
		<router-view path="$router.key" />
	</div>
</template>

<script>
	import './assets/css/bootstrap.dark.min.css';
	//import './assets/css/app.css';

	import Header from './components/Header.vue';

	export default {
		name: 'App',
		components: {
			Header
		}
	}
</script>
