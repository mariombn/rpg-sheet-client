<template>
	<div id="app" style="margin-bottom: 50px;">
		<Header />
		<Sheet />
		<!-- <router-view path="$router.key" /> -->
	</div>
</template>

<script>
	import './assets/css/bootstrap.min.css';
	import './assets/css/app.css';

	import Header from './components/Header.vue';
	import Sheet from './components/Sheet.vue';

	export default {
		name: 'App',
		components: {
			Header,
			Sheet
		}
	}
</script>
